import {
  Button,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { RegisterPage } from "@/components/RegisterPage/RegisterPage";
import { Modal, PaperProvider, Portal } from "react-native-paper";

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setIsRegisterPressed: Dispatch<SetStateAction<boolean>>;
}

export const AuthPage = ({ setIsLoggedIn, setIsRegisterPressed }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  return (
    <>
      <View className="flex flex-row-reverse justify-center content-baseline gap-x-2 absolute top-72 left-24 absolute z-10">
        <View className="rotate-90">
          <Ionicons name={"barbell-outline"} size={45} color={"red"}></Ionicons>
        </View>
        <Text className="text-2xl top-2 font-bold text-white">BB Gym App</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex content-center justify-center align-middle absolute z-1 top-48 left-1 w-96 h-3/4 rounded-3xl bg-black p-7 gap-y-2">
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            className="gap-6"
          >
            <TextInput
              value={email}
              className="bg-white w-auto h-10 rounded-xl pl-4 text-black focus:border-2 focus:border-cyan-400"
              placeholder="Enter email:"
              placeholderTextColor={"gray"}
              onChangeText={setEmail}
            />
            <TextInput
              value={password}
              className="bg-white w-auto h-10 rounded-xl pl-4 text-black focus:border-2 focus:border-cyan-400"
              placeholder="Enter password:"
              placeholderTextColor={"gray"}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <View className="pl-3 gap-x-8 gap-y-4">
              <View className="bg-transparent rounded-xl w-64 border-white border-2">
                <Button
                  color={"white"}
                  title="Login"
                  onPress={() => alert(email + " " + password)}
                />
              </View>
              <View className="bg-transparent rounded-xl w-64 border-white border-2">
                <Button
                  color={"white"}
                  title="Register"
                  onPress={() => setIsRegisterPressed(true)}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
