import { View, ScrollView, SafeAreaView, Button } from "react-native";
import { Profile } from "../Profile/Profile";
import { LinearGradient } from "expo-linear-gradient";
import { CustomCalendar } from "../Calendar/Calendar";
import { TodayTrainingsList } from "../TodayTrainingsList/TodayTrainingsList";
import { ProfileButtonList } from "../ProfileButtonList/ProfileButtonList";

export default function ProfileNavigationTab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="h-full flex gap-y-7 bg-white">
        <LinearGradient colors={["white", "lightgray"]}>
          <View>
            <Profile />
          </View>

          <View>
            <ProfileButtonList />
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
