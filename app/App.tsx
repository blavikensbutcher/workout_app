import React, { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation/TabNavigation";
import { RegisterPage } from "@/components/RegisterPage/RegisterPage";
import { AuthPage } from "@/components/AuthPage/AuthPage";
import { useAuth } from "@/hooks/useAuth";

export const App = () => {
  const {isLoggedIn,setIsLoggedIn, user} = useAuth()
  const [isRegisterPressed, setIsRegisterPressed] = useState<boolean>(false);

  return isLoggedIn ? (
    <TabNavigation />
  ) : isRegisterPressed ? (
    <RegisterPage
      setIsRegisterPressed={setIsRegisterPressed}
    />
  ) : (
    <AuthPage
      setIsLoggedIn={setIsLoggedIn}
      setIsRegisterPressed={setIsRegisterPressed}
    />
  );
};
