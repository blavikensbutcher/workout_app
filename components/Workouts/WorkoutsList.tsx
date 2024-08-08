import { ScrollView } from 'react-native';
import { WorkoutsListItem } from './WorkoutListItem/WorkoutListItem';
import { ProfileBtn } from '@/components/ProfileBtn/ProfileBtn';
import { useAuth } from '@/hooks/useAuth';
import { useAddNewExercise } from '@/hooks/Exercises/useAddNewExercise';

const TRAINING_DATA = [
  {
    name: 'Dips',
    totalWeightInKg: 1000,
    exercisesList: [
      {
        reps: 0,
        createdAt: '',
      },
      {
        reps: 0,
        createdAt: '',
      },
      {
        reps: 0,
        createdAt: '',
      },
      {
        reps: 0,
        createdAt: '',
      },
      {
        reps: 0,
        createdAt: '',
      },
      {
        reps: 0,
        createdAt: '',
      },
    ],
  },
  {
    name: 'Pullups',
    totalWeightInKg: 0,
    exercisesList: [
      {
        reps: 11,
        createdAt: Date.now().toString(),
      },
      {
        reps: 20,
        createdAt: Date.now().toString(),
      },
      {
        reps: 30,
        createdAt: Date.now().toString(),
      },
      {
        reps: 15,
        createdAt: Date.now().toString(),
      },
      {
        reps: 12,
        createdAt: Date.now().toString(),
      },
      {
        reps: 11,
        createdAt: Date.now().toString(),
      },
    ],
  },
  {
    name: 'Squats',
    totalWeightInKg: 0,
    exercisesList: [
      {
        reps: 11,
        createdAt: Date.now().toString(),
      },
      {
        reps: 20,
        createdAt: Date.now().toString(),
      },
      {
        reps: 30,
        createdAt: Date.now().toString(),
      },
      {
        reps: 15,
        createdAt: Date.now().toString(),
      },
      {
        reps: 12,
        createdAt: Date.now().toString(),
      },
      {
        reps: 11,
        createdAt: Date.now().toString(),
      },
    ],
  },
  {
    name: 'Bench Press',
    totalWeightInKg: 10000,
    exercisesList: [
      {
        reps: 11,
        weight: 30,
        createdAt: Date.now().toString(),
      },
      {
        reps: 12,
        weight: 30,
        createdAt: Date.now().toString(),
      },
      {
        reps: 21,
        weight: 380,
        createdAt: Date.now().toString(),
      },
      {
        reps: 15,
        weight: 50,
        createdAt: Date.now().toString(),
      },
      {
        reps: 11,
        weight: 30,
        createdAt: Date.now().toString(),
      },
    ],
  },
];

export const WorkoutsList = () => {
  const user = useAuth().user;

  const exercise = {
    name: 'pushups',
    isWithWeight: false,
  };

  return (
    <ScrollView>
      <ProfileBtn onPress={() => useAddNewExercise({ exercise, userId: user?.uid })}>
        New Exercise
      </ProfileBtn>
      {TRAINING_DATA.map((exercise) => (
        <WorkoutsListItem
          key={exercise.name}
          name={exercise.name}
          workoutList={exercise.exercisesList}
        />
      ))}
    </ScrollView>
  );
};
