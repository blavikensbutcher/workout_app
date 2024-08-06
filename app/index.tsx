import { App } from "@/app/App";
import { Provider } from "react-redux";
import { Text } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  return (
    <>
      <App />
      <Toast />
    </>
  );
}
