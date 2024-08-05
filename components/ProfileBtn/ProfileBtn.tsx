import { SafeAreaView, View, Button } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode
  onPress: () => void
}

export const ProfileBtn: React.FC<Props> = ({ children , onPress})=> {
  return (
    <SafeAreaView className="w-auto">
      <View className="bg-slate-950/70 rounded-lg m-2">
        <Button
          title={typeof children === "string" ? children : "error"}
          color={"cyan"}
          onPress={onPress}
        ></Button>
      </View>
    </SafeAreaView>
  );
};
