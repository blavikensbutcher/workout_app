import React, { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation/TabNavigation";
import { RegisterPage } from "@/components/RegisterPage/RegisterPage";
import { AuthPage } from "@/components/AuthPage/AuthPage";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState<boolean>(false);

  return isLoggedIn ? (
    <TabNavigation />
  ) : isRegisterPressed ? (
    <RegisterPage setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <AuthPage
      setIsLoggedIn={setIsLoggedIn}
      setIsRegisterPressed={setIsRegisterPressed}
    />
  );
};
