interface Exercise {
  name: string;
  totalWeightInKg: number;
  exercisesList: ExerciseList[];
}

interface ExerciseList {
  reps: number;
  weight?: number;
  timeInSeconds?: number;
  createdAt: string;
}
