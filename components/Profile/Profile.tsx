import { View, Image, Text } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { updateUserProfile } from "@/config/firebase";

export const Profile = () => {

  const user = useAuth()

  return (
    <View className="flex flex-row w-full justify-around content-around p-2">
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/119450554?v=4",
        }}
        style={{ width: 125, height: 125, borderRadius: 20 }}
      />

      <View className="flex gap-y-4">
        <View>
          <Text className="text-base">{user.user.displayName}</Text>
          <Text className="text-xs border-solid text-gray-500">
            Goal: Building muscles
          </Text>
        </View>
        <View className="flex-shrink-0 flex-wrap flex-row gap-x-4">
          <View className="border-gray-500 border-solid border-0.5 rounded-2xl px-3 py-2 items-center w-auto">
            <Text className="text-sm">Weight:</Text>
            <Text className="text-sm">81</Text>
          </View>
          <View className="border-gray-500  border-solid border-0.5 rounded-2xl px-3 py-2 items-center w-auto">
            <Text className="text-sm">Height:</Text>
            <Text className="text-sm">180</Text>
          </View>
          <View className="border-gray-500 border-solid border-0.5 rounded-2xl px-3 py-2 items-center w-auto">
            <Text className="text-sm">Age: </Text>
            <Text className="text-sm">31</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
