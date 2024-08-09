import { Button, Switch, Text, TextInput, View } from 'react-native';
import { OpenModal } from '@/components/OpenModal/OpenModal';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useAddNewExercise } from '@/hooks/Exercises/useAddNewExercise';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddExerciseModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const [isWithWeight, setIsWithWeight] = useState(false);
  const [exerciseName, setExerciseName] = useState('');

  const user = useAuth().user;

  return (
    <OpenModal isModalOpen={isModalOpen}>
      <View className="top-64 h-72 bg-gray-800 rounded-2xl">
        <TextInput
          value={exerciseName}
          autoCapitalize={'sentences'}
          className="ml-10 mb-10 mt-10 bg-white w-3/4 h-10 rounded-xl border-0.5 border-black pl-4 text-black focus:border-2 focus:border-cyan-400"
          placeholder="Exercise name:"
          placeholderTextColor={'gray'}
          onChangeText={setExerciseName}
        />

        <View className="flex flex-row justify-center gap-x-4">
          <Text className="text-white text-base mt-1">Exercise with weight</Text>
          <Switch onChange={() => setIsWithWeight(!isWithWeight)} value={isWithWeight} />
        </View>

        <View className="absolute right-3 -top-8">
          <Button title="🆇" color="white" onPress={() => setIsModalOpen(false)} />
        </View>

        <View className="absolute right-28 bottom-5 border-2 border-white rounded-2xl">
          <Button
            title="Create exercise"
            color="white"
            onPress={() => {
              useAddNewExercise({
                exercise: { name: exerciseName, isWithWeight },
                userId: user?.uid,
              });

              setIsModalOpen(false);
            }}
          />
        </View>
      </View>
    </OpenModal>
  );
};
