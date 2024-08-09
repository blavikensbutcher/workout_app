export interface Exercise {
  id?: string;
  name: string;
  totalWeightForTheMonthInKg?: number;
  totalRepsForTheMonth?: number;
  lastTrainingSession?: LastTrainingSession;
  isWithWeight?: boolean;
  exercisesList?: ExerciseList[];
}

interface ExerciseList {
  reps: number;
  weight?: number;
  timeInSeconds?: number;
  createdAt: string;
}

export interface LastTrainingSession {
  seconds: number;
  nanoseconds: number;
}
