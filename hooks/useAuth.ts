import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/config/config";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object | null>({});

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser({});
      }
    });

    return () => unSub();
  }, []);

  const values = {
    user,
    isLoggedIn,
  };

  return useMemo(() => values, [values]);
};