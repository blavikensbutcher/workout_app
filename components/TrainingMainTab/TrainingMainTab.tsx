import { SafeAreaView } from "react-native";
import { WorkoutsList } from "../Workouts/WorkoutsList";
import { InsideExercisePage } from "@/components/Workouts/InsideExercise/InsideExercisePage";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TrainingStack = createNativeStackNavigator();

export function TrainingStackScreen() {
  return (
    <TrainingStack.Navigator>
      <TrainingStack.Screen
        name="Workouts"
        options={{ headerShown: false }}
        component={TrainingMainTab}
      />
      <TrainingStack.Screen
        name={'InsideExercise'}
        options={{}}
        component={InsideExercisePage}
      />
    </TrainingStack.Navigator>
  );
}

export default function TrainingMainTab() {
  return (
    <SafeAreaView className="bg-gray-800 h-full">
      <WorkoutsList />
    </SafeAreaView>
  );
}
