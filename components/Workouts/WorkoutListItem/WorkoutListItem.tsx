import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { formatTimestamp } from '@/helpers/formatTimeStamp';
import { Exercise } from '@/types/TrainingSession/training.types';

interface Props {
  exercise: Exercise;
}

export const WorkoutsListItem = ({ exercise }: Props) => {
  const navigation = useNavigation();

  const greenStyle = 'text-green-400 text-xs';

  return (
    <Pressable
      onLongPress={() => alert('drag')}
      // @ts-ignore
      onPress={() => navigation.navigate('InsideExercise')}
    >
      <View className="flex flex-row bg-gray-900 m-2 p-4 rounded-3xl relative">
        <View className="bg-gray-200 flex-row p-1.5 w-12 h-12 justify-center content-center rounded-xl mr-4">
          <Text className="text-2xl">💪🏼</Text>
        </View>
        <View className="flex-col flex">
          <View className="flex-row gap-x-2">
            <Text className="text-white text-xl">{exercise.name}:</Text>
            <Text className="text-white text-base gap-2 mt-0.5">
              {exercise.isWithWeight
                ? `${exercise.totalWeightForTheMonthInKg}kg`
                : String(exercise.totalRepsForTheMonth)}
            </Text>
            <Text className={greenStyle}>+3.2%</Text>
          </View>
          <View>
            <Text className="text-white text-sm">
              {formatTimestamp(exercise.lastTrainingSession) || 'No data'}
            </Text>
          </View>
        </View>
        <Pressable
          className="absolute top-5 right-5 w-10 h-10 p-2 justify-center content-center"
          onPress={() => alert('Pressed options')}
        >
          <Ionicons name="ellipsis-horizontal-outline" color={'white'} size={25} />
        </Pressable>
      </View>
    </Pressable>
  );
};
