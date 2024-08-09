import { Button, Pressable, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { WorkoutsListItem } from './WorkoutListItem/WorkoutListItem';
import { ProfileBtn } from '@/components/ProfileBtn/ProfileBtn';
import { useAuth } from '@/hooks/useAuth';
import { useGetUserExercises } from '@/hooks/Exercises/useGetUserExercises';
import { OpenModal } from '@/components/OpenModal/OpenModal';
import { useState } from 'react';
import { AddExerciseModal } from '@/components/AddExerciseModal/AddExerciseModal';

export const WorkoutsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useAuth().user;

  const exercises = useGetUserExercises(user);

  return (
    <ScrollView>
      <View className="flex pt-3 pr-5 justify-end items-end">
        <Button title={'✚'} color={'white'} onPress={() => setIsModalOpen(true)} />
      </View>

      {<Text>Loading....</Text> &&
        exercises.map((exercise) => <WorkoutsListItem key={exercise.id} exercise={exercise} />)}

      <AddExerciseModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </ScrollView>
  );
};
