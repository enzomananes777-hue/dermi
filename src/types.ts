export interface ChatMessage {
  id: string;
  sender: 'user' | 'dermi' | 'system';
  text: string;
  timestamp: string;
  isRedFlag?: boolean;
  relatedChapter?: number;
  suggestions?: string[];
  isFallback?: boolean;
}

export interface KnowledgeChapter {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyFacts: string[];
}

export interface RoutineStep {
  step: number;
  title: string;
  timeOfDay: 'Mañana y Noche' | 'Solo Mañana' | 'Solo Noche';
  goal: string;
  instructions: string;
  whatToLookFor: string[];
  whatToAvoid: string[];
  budgetTip: string;
  activeTreatments?: {
    name: string;
    concentration: string;
    usage: string;
    action: string;
  }[];
}

export interface MythFact {
  id: string;
  myth: string;
  verdict: 'Falso y Peligroso' | 'Falso y Contraproducente' | 'Mito Inexacto';
  reality: string;
  scientificReason: string;
  betterAlternative: string;
  chapterRef: number;
}

export interface RedFlagAssessment {
  id: string;
  symptom: string;
  severity: 'Alta' | 'Urgente' | 'Moderada';
  description: string;
  actionRequired: string;
}
