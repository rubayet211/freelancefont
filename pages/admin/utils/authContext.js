import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([null]);
  const router = useRouter();

  const signin = async (username, cookie) => {
    setUser({ username, cookie });
  };

  const checkUser = () => {
    console.log("user:" + user?.username);
    console.log("cookie:" + user?.cookie);
    return user?.username && user?.cookie;
  };

  const logout = async () => {
    await doSignOut();
  };

  const doSignOut = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/moderator/logout",
        { withCredentials: true },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      console.log(response);
      setUser(null);
      document.cookie = `${user.cookie}=; Max-Age=0`;

      router.push("/moderator/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin, checkUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
