import { App } from "@/app/App";
import { Provider } from "react-redux";
import { Text } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  return (
    <>
      {/*<Provider store={store.store}>*/}
      {/*  <PersistGate*/}
      {/*    loading={<Text>Loading...</Text>}*/}
      {/*    persistor={store.persistor}*/}
      {/*  >*/}
          <App />
      {/*  </PersistGate>*/}
      {/*</Provider>*/}
      <Toast />
    </>
  );
}
