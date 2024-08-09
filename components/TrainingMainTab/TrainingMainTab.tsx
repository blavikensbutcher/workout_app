import { SafeAreaView } from 'react-native';
import { WorkoutsList } from '../Workouts/WorkoutsList';
import { InsideExercisePage } from '@/components/Workouts/InsideExercise/InsideExercisePage';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

const TrainingStack = createNativeStackNavigator();

export function TrainingStackScreen() {
  return (
    <TrainingStack.Navigator>
      <TrainingStack.Screen
        name="Workouts"
        options={{ headerShown: false }}
        component={TrainingMainTab}
      />
      <TrainingStack.Screen name={'InsideExercise'} options={{}} component={InsideExercisePage} />
    </TrainingStack.Navigator>
  );
}

export default function TrainingMainTab() {
  return (
    <LinearGradient colors={['darkslategray', 'olivedrab']}>
      <SafeAreaView className="bg-transparent h-full">
        <WorkoutsList />
      </SafeAreaView>
    </LinearGradient>
  );
}
