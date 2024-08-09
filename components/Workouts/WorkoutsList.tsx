import { Button, Pressable, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { WorkoutsListItem } from './WorkoutListItem/WorkoutListItem';
import { ProfileBtn } from '@/components/ProfileBtn/ProfileBtn';
import { useAuth } from '@/hooks/useAuth';
import { useGetUserExercises } from '@/hooks/Exercises/useGetUserExercises';
import { OpenModal } from '@/components/OpenModal/OpenModal';
import { useState } from 'react';

export const WorkoutsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithWeight, setIsWithWeight] = useState(false);
  const [exerciseName, setExerciseName] = useState('');

  const user = useAuth().user;

  const exercises = useGetUserExercises(user);

  return (
    <ScrollView>
      <ProfileBtn onPress={() => setIsModalOpen(true)}>New Exercise</ProfileBtn>
      {<Text>Loading....</Text> &&
        exercises.map((exercise) => <WorkoutsListItem key={exercise.id} exercise={exercise} />)}

      <OpenModal isModalOpen={isModalOpen}>
        <View className="top-64 h-72 bg-gray-800 rounded-2xl">
          <TextInput
            value={exerciseName}
            autoCapitalize={'sentences'}
            className="ml-10 mt-10 bg-white w-3/4 h-10 rounded-xl border-0.5 border-black pl-4 text-black focus:border-2 focus:border-cyan-400"
            placeholder="Exercise name:"
            placeholderTextColor={'gray'}
            onChangeText={setExerciseName}
          />

          <View className="flex flex-row justify-center gap-x-4">
            <Text className="text-white text-base mt-1">Exercise with weight</Text>
            <Switch onChange={() => setIsWithWeight(!isWithWeight)} value={isWithWeight} />
          </View>

          <View className="absolute right-1/3 bottom-0">
            <Button title="Create exercise" color="white" onPress={() => setIsModalOpen(false)} />
          </View>

          <View className="absolute right-0 -top-8">
            <Button title="Close" color="white" onPress={() => setIsModalOpen(false)} />
          </View>
        </View>
      </OpenModal>
    </ScrollView>
  );
};
