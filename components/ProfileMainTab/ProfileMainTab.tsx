import { View, ScrollView, SafeAreaView, Button } from "react-native";
import { Profile } from "../Profile/Profile";
import { LinearGradient } from "expo-linear-gradient";
import { CustomCalendar } from "../Calendar/Calendar";
import { TodayTrainingsList } from "../TodayTrainingsList/TodayTrainingsList";
import { ProfileBtn } from "@/components/ProfileBtn/ProfileBtn";

export default function ProfileMainTab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="h-full flex gap-y-7 bg-white">
        <LinearGradient colors={["white", "lightgray"]}>
          <View>
            <Profile />
          </View>

          <View>
            <ProfileBtn onPress={() => alert("You premium user now")}>Premium +</ProfileBtn>
          </View>

          <View className="m-2">
            <CustomCalendar />
          </View>

          <SafeAreaView className="m-2">
            <TodayTrainingsList />
          </SafeAreaView>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
