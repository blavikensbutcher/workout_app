import { SafeAreaView } from "react-native";
import { WorkoutsList } from "../Workouts/WorkoutsList";

export default function SettingsNavigationTab() {
  return (
    <SafeAreaView className="bg-gray-800 h-full">
      <WorkoutsList />
    </SafeAreaView>
  );
}
