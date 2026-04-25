export type ExerciseType = 'SELECT' | 'SCRAMBLE' | 'FILL' | 'MATCH' | 'IMAGE_SELECT';

export interface Exercise {
  id: string;
  type: ExerciseType;
  instruction: string; // e.g., 'Ընտրեք ճիշտ թարգմանությունը'
  prompt: string; // The main text or question
  target: string; // The correct answer
  choices?: string[]; // Distractors
  image?: string; // Optional image for IMAGE_SELECT
  audioText?: string; // Spanish text for text-to-speech
  scrambledWords?: string[]; // For scramble type
  translation?: string; // Armenian translation for the feedback modal
}

export interface Level {
  id: number;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface WordPair {
  id: string;
  hy: string; // Armenian
  es: string; // Spanish
}
