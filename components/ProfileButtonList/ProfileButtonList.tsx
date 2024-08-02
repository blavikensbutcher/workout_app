import { SafeAreaView, View, Button } from "react-native";

export const ProfileButtonList = () => {
  return (
    <SafeAreaView className="w-auto">
      <View className="bg-slate-950/70 rounded-lg m-2">
        <Button
          title="Premium +"
          color={"cyan"}
          onPress={() => alert("You premium user now")}
        ></Button>
      </View>
      {/* <View className="border-0.5 bg-transparent rounded-lg mr-2 ml-2 w-auto">
        <Button
          title="New exercises"
          color={"cyan"}
          onPress={() => alert("Put your measurement")}
        ></Button>
      </View>
      <View className="bg-slate-600/40 rounded-lg mr-2 ml-2 w-auto">
        <Button
          title="Premium"
          color={"cyan"}
          onPress={() => alert("Put your measurement")}
        ></Button>
      </View> */}
    </SafeAreaView>
  );
};
