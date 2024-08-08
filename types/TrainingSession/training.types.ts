interface Exercise {
  name: string;
  totalWeightForTheMonthInKg?: number;
  totalRepsForTheMonth?: number;
  lastTrainingSession?: Date;
  isWithWeight: boolean;
  exercisesList?: ExerciseList[];
}

interface ExerciseList {
  reps: number;
  weight?: number;
  timeInSeconds?: number;
  createdAt: string;
}
