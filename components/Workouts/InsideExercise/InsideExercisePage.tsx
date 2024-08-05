import { View, Text, SafeAreaView } from "react-native";


const TRAINING_DATA: Exercise[] = [
  {
    name: "Dips",
    totalWeightInKg: 1000,
    exercisesList: [
      {
        reps: 0,
        createdAt: "",
      },
      {
        reps: 0,
        createdAt: "",
      },
      {
        reps: 0,
        createdAt: "",
      },
      {
        reps: 0,
        createdAt: "",
      },
      {
        reps: 0,
        createdAt: "",
      },
      {
        reps: 0,
        createdAt: "",
      },
    ],
  },
  {
    name: "Pullups",
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
    name: "Squats",
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
    name: "Bench Press",
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

export const InsideExercisePage = () => {
  return (
    <SafeAreaView className="bg-gray-800 h-full">
      <Text>Inside training</Text>
    </SafeAreaView>
  );
};
