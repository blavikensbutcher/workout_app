import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { signUp } from "@/config/firebase";
import Toast from "react-native-toast-message";


interface Props {
  setIsRegisterPressed: Dispatch<SetStateAction<boolean>>;
}

export const RegisterPage = ({
  setIsRegisterPressed,
}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigation = useNavigation();

  return (
    <>
      <View className="flex flex-row-reverse justify-center content-baseline gap-x-2 top-56 left-24 absolute z-10">
        <View className="rotate-90">
          <Ionicons name={"barbell-outline"} size={45} color={"red"}></Ionicons>
        </View>
        <Text className="text-2xl top-2 font-bold text-white">BB Gym App</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex justify-center align-middle absolute z-1 top-20 left-1 w-96 h-full rounded-3xl bg-black p-7 gap-y-2">
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
            <TextInput
              value={repeatPassword}
              className="bg-white w-auto h-10 rounded-xl pl-4 text-black focus:border-2 focus:border-cyan-400"
              placeholder="Repeat password:"
              placeholderTextColor={"gray"}
              onChangeText={setRepeatPassword}
              secureTextEntry={true}
            />

            <View className="h-10">
              <Button
                title="back to login page"
                onPress={() => {
                  setIsRegisterPressed(false);
                }}
              />
            </View>

            <View className="bg-black rounded-xl border-white border-2">
              <Button
                color={"white"}
                title="Register"
                onPress={async () => {
                  if (password === repeatPassword) {
                    await signUp(String(email), String(password))
                  } else {
                    Toast.show({
                      type: "error",
                      text1: "Error",
                      text2: "Passwords must match",
                      position: "bottom",
                      keyboardOffset: -280
                    })
                }
                setIsRegisterPressed(false)
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
