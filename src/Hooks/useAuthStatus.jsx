import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export  function useAuthStatus  ()  {
  const [loggedin, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
    }
    setLoading(false);
    });
  }, []);
  return { loggedin, loading };
};

