import { View, Text, Button, TextInput } from "react-native";
import { logout, updateUserProfile } from "@/config/firebase";
import { useState } from "react";

export default function SettingsMainTab() {
  const [name, setName] = useState<string>();
  const [photoUrl, setPhotoUrl] = useState<string>();

  return (
    <>
      <TextInput
        value={name}
        className="ml-10 mt-10 bg-white w-3/4 h-10 rounded-xl border-0.5 border-black pl-4 text-black focus:border-2 focus:border-cyan-400"
        placeholder="Enter name:"
        placeholderTextColor={"gray"}
        onChangeText={setName}
      />
      <TextInput
        value={photoUrl}
        className="ml-10 mt-10 bg-white w-3/4 h-10 rounded-xl border-0.5 border-black pl-4 text-black focus:border-2 focus:border-cyan-400"
        placeholder="Enter photo url:"
        placeholderTextColor={"gray"}
        onChangeText={setPhotoUrl}
      />

      <View className="absolute w-60 bottom-24 left-20 rounded-3xl bg-green-500">
        <Button
          title="Update"
          color="white"
          onPress={() => updateUserProfile({ displayName: name, photoURL: photoUrl })}
        />
      </View>

      <View className="absolute w-60 bottom-12 left-20 rounded-3xl bg-red-800">
        <Button title="Logout" color="white" onPress={logout} />
      </View>
    </>
  );
}
