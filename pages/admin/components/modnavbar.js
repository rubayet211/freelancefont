import Button from "@/pages/components/Button";
import Navbar from "@/pages/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "../utils/authContext";

function ModNavBar() {
  const [jsonData, setJsonData] = useState("");
  const router = useRouter();
  const { user, logout, checkUser } = useAuth();

  useEffect(() => {
    checkSession();
    const fetchData = async () => {
      // Check if user.cookie is defined
      if (!user.cookie) {
        // Redirect to login page if user.cookie is not defined
        router.push("/moderator/Login");

        return;
      }
    };
  }, []);

  function checkSession() {
    if (user != null) {
      fetchData();
      console.log("user:  " + user.username);
      console.log("user:  " + user.cookie);
      checkUser();
    } else {
      router.push("/moderator/Login");
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:3000/moderator/find/" + user.username
      );
      const jsonData = response.data;
      console.log(jsonData);
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="dark:bg-slate-800 bg-green-300 static top-0">
      <Navbar
        design="flex justify-between items-center py-3 px-5"
        template={
          <>
            <h1 className="text-white text-3xl font-bold">Freelance</h1>
            <div
              className="flex items-center space-x-5 text-xs tooltip tooltip-bottom"
              data-tip={jsonData.username}
            >
              <div className="px-5">
                <Image
                  src={"/rocketdab.png"}
                  alt="Description of image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default ModNavBar;
