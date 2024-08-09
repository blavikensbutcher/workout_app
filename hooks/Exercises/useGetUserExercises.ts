import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { Exercise } from '@/types/TrainingSession/training.types';

export const useGetUserExercises = (user: User | undefined): Exercise[] => {
  const [exercises, setExercises] = useState<any[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      if (user?.uid) {
        try {
          const db = getFirestore();

          const exerciseListRef = collection(db, 'ExerciseList');

          const q = query(exerciseListRef, where('userId', '==', user.uid));

          const querySnapshot = await getDocs(q);

          const response = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setExercises(response);
        } catch (error) {
          console.error('Error getting exercises: ', error);
          throw error;
        }
      }
    };

    fetchExercises();
  }, [user]);

  return exercises;
};
