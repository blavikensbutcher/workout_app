import { Text, View, SafeAreaView } from "react-native";

export const TodayTrainingsList = () => {
  return (
    <SafeAreaView className=" flex justify-center items-center gap-2">
      <Text className="text-xl">Today's Workout</Text>

      <View className="flex justify-center items-center bg-slate-600/40 w-full h-20 rounded-xl">
        <Text className="text-xl text-white">Pullups</Text>
      </View>

      <View className="flex justify-center items-center  bg-slate-800/60 w-full h-20 rounded-xl">
        <Text className="text-xl text-white">Pushups</Text>
      </View>

      <View className="flex justify-center items-center bg-slate-800/80 w-full h-20 rounded-xl">
        <Text className="text-xl  text-white">Low Row</Text>
      </View>

      <View className="flex justify-center items-center bg-slate-950/80 w-full h-20 rounded-xl">
        <Text className="text-xl  text-white">Today's Workout</Text>
      </View>
    </SafeAreaView>
  );
};
