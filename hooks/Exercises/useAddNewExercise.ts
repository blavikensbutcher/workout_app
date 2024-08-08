import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

interface Props {
  exercise: Exercise;
  userId: string | undefined;
}

export const useAddNewExercise = async ({ exercise, userId }: Props) => {
  try {
    const docRef = await addDoc(collection(db, 'ExerciseList'), {
      name: exercise.name,
      totalWeightForTheMonthInKg: exercise.totalWeightForTheMonthInKg || 0,
      totalRepsForTheMonth: exercise.totalRepsForTheMonth || 0,
      lastTrainingSession: new Date(),
      isWithWeight: exercise.isWithWeight,
      exerciseList: [],
      userId,
    });

    return docRef;

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
