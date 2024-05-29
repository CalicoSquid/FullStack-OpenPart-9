export interface exerciseValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface BmiValues {
  height: number;
  weight: number;
}

export interface ExerciseValues {
  data: number[];
  target: number;
}
