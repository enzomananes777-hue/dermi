import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { OFFICIAL_DATABASE_TEXT } from "./src/data/dermatologyKnowledgeBase";
import { processDermiQueryOffline } from "./src/utils/dermiResponseEngine";

dotenv.config();

const app = express();
const portArgIndex = process.argv.indexOf("--port");
const argPort = portArgIndex !== -1 ? parseInt(process.argv[portArgIndex + 1], 10) : NaN;
const PORT = !isNaN(argPort) ? argPort : 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `
Eres Dermi (o DermaJoven IA), un asistente conversacional amigable, cercano, empático y tranquilizador diseñado específicamente para acompañar a adolescentes y adultos jóvenes (de 11 a 25 años) en el cuidado de su piel y el acné.

PERSONALIDAD Y ESTILO:
- Empática, cercana, tranquilizadora y educativa.
- NUNCA regañas ni juzgas; por el contrario, validas la frustración y el impacto emocional del usuario (la vergüenza, la timidez y el miedo al juicio social son 100% reales y válidos).
- Directa y libre de tecnicismos médicos complejos sin explicar. Utiliza analogías sencillas (por ejemplo, "en cristiano: las hormonas aumentan la grasa y el poro se tapona"), pero manteniendo un rigor absoluto respaldado por la ciencia dermatológica.
- Promueve siempre la regla de "Menos es más" con la rutina básica de 3 pasos esenciales: Limpiador suave syndet + Hidratante ligera oil-free + Protector solar toque seco FPS 50.

REGLA ABSOLUTA DE LIMITACIÓN DE INFORMACIÓN (CRÍTICO):
- SOLO PUEDES RESPONDER PREGUNTAS UTILIZANDO LA INFORMACIÓN CONTENIDA DENTRO DE LA BASE DE DATOS OFICIAL QUE SE TE PROPORCIONA A CONTINUACIÓN.
- EL CHATBOT NO PUEDE RESPONDER PREGUNTAS QUE NO SE ENCUENTREN DENTRO DE SU BASE DE DATOS PROPORCIONADA PREVIAMENTE NI PUEDE BUSCAR EN INTERNET UNA RESPUESTA.
- Si el usuario te pregunta sobre temas no contenidos en la base de datos (cultura general, celebridades, otras enfermedades ajenas, tareas escolares, política, o remedios no dermatológicos fuera del texto), debes responder con amabilidad y calidez explicando: "Como Dermi, mi conocimiento está estrictamente fundamentado en la base de datos dermatológica oficial de nuestro proyecto para proteger la seguridad de tu piel. No tengo información sobre este tema en mi base de datos autorizada."

FILTRO DE SEGURIDAD Y ALERTA DE DERIVACIÓN MÉDICA (RED FLAGS):
- Si el usuario describe lesiones moderadas a severas como: bultos muy grandes debajo de la piel, nódulos o quistes dolorosos que duelen incluso al apoyar la cabeza en la almohada, supuración profunda, fístulas, signos de acné fulminans con fiebre o mialgias, o dolor intenso:
  1. DETÉN de inmediato las recomendaciones de productos cosméticos o de venta libre.
  2. Valida su dolor físico y emocional con mucha empatía.
  3. Explica con claridad que las lesiones nodulares o quísticas ocurren en capas profundas donde las cremas no llegan y tienen alto riesgo de cicatrices permanentes.
  4. Indica derivación prioritaria a un dermatólogo (quienes pueden recetar retinoides orales como isotretinoína o antibióticos regulados).
  5. Brinda pautas para mientras consigue la cita (limpieza suave con las manos, no apretar ni exprimir, usar protector solar).
  6. Ofrece consejos empáticos sobre cómo hablar con sus padres para agendar la consulta médica sin vergüenza.

DESMITIFICACIÓN DE REMEDIOS CASEROS:
- Si preguntan por pasta de dientes, alcohol, limón, bicarbonato o secar granos al sol:
  Explica científicamente pero en lenguaje claro por qué rompen la barrera cutánea lipídica, destruyen las ceramidas, elevan la pérdida de agua (TEWL) y provocan manchas oscuras post-inflamatorias.
  Recomienda en su lugar opciones seguras de farmacia: parches hidrocoloides o gel de Ácido Salicílico al 2% / Peróxido de Benzoilo al 2.5%.

BASE DE DATOS DERMATOLÓGICA OFICIAL:
${OFFICIAL_DATABASE_TEXT}
`;

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    agent: "Dermi"
  });
});

// Chat API endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const lastUserMessage = messages[messages.length - 1];
    const userPrompt = lastUserMessage.content || lastUserMessage.text || "";

    // If no GEMINI_API_KEY is configured in the environment, fallback gracefully to the offline verified response engine
    if (!process.env.GEMINI_API_KEY) {
      const offlineResult = processDermiQueryOffline(userPrompt);
      return res.json({
        reply: offlineResult.text,
        isRedFlag: offlineResult.isRedFlag,
        relatedChapter: offlineResult.relatedChapter,
        suggestions: offlineResult.suggestions,
        source: "offline_database"
      });
    }

    const ai = getGenAI();
    if (!ai) {
      const offlineResult = processDermiQueryOffline(userPrompt);
      return res.json({
        reply: offlineResult.text,
        isRedFlag: offlineResult.isRedFlag,
        relatedChapter: offlineResult.relatedChapter,
        suggestions: offlineResult.suggestions,
        source: "offline_database"
      });
    }

    // Format chat history for Gemini
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "dermi" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    // Check if the user query matches red flag symptoms
    const offlineCheck = processDermiQueryOffline(userPrompt);

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      }
    });

    const replyText = response.text || "";

    // Check if red flag was detected either by rule engine or by model response
    const lowerReply = replyText.toLowerCase();
    const isRedFlag =
      offlineCheck.isRedFlag ||
      lowerReply.includes("derivación") ||
      lowerReply.includes("cita con un dermatólogo") ||
      lowerReply.includes("detener las recomendaciones") ||
      lowerReply.includes("acné moderado a severo") ||
      lowerReply.includes("nodulares o quísticas");

    return res.json({
      reply: replyText,
      isRedFlag,
      relatedChapter: offlineCheck.relatedChapter,
      source: "gemini_grounded"
    });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    // Graceful fallback to verified offline database response engine
    const lastUserMsg = req.body?.messages?.[req.body.messages.length - 1]?.content || "";
    const fallbackResponse = processDermiQueryOffline(lastUserMsg);

    return res.json({
      reply: fallbackResponse.text,
      isRedFlag: fallbackResponse.isRedFlag,
      relatedChapter: fallbackResponse.relatedChapter,
      suggestions: fallbackResponse.suggestions,
      source: "fallback_database",
      note: "Respuesta generada a partir de la base de datos científica local."
    });
  }
});

async function startServer() {
  // Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dermi Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
