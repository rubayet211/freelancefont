import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [moderator, setModerator] = useState(null);
  const router = useRouter();

  const signin = async (username, cookie) => {
    setModerator({ username, cookie });
  };

  const checkModerator = () => {
    console.log("user:" + moderator?.username);
    console.log("cookie:" + moderator?.cookie);
    return moderator?.username && moderator?.cookie;
  };

  const logout = async () => {
    await doSignOut();
  };

  const doSignOut = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/moderator/logout",
        { withCredentials: true },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      console.log(response);
      setModerator(null);
      document.cookie = null;

      router.push("/moderator/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ moderator, signin, checkModerator, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
