import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/pages/components/Navbar";

function ModNavBar() {
  const [jsonData, setJsonData] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkSession();
    const fetchData = async () => {
      // You can perform any other actions if needed
    };
    fetchData();
  }, []);

  function checkSession() {
    // You can add your own logic for checking the session, if needed
    // For example, redirecting to the login page if the session is not valid
  }

  async function fetchData() {
    // You can add your own logic for fetching data, if needed
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/find/" + user.username
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
