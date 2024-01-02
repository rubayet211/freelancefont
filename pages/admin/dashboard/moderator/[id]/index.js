import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import Image from "next/image";
import ModNavBar from "@/pages/admin/components/modnavbar";
import Sidebar from "@/pages/admin/components/sidebar";

function ModeratorProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [moderator, setModerator] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/moderator/${id}`
        );
        setModerator(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!moderator) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center ml-48">
          <main className="flex-wrap overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl font-medium dark:text-slate-100 mb-4">
                Moderator Profile
              </h3>
              <div className="w-full max-w-md mx-auto">
                <div className="bg-white p-5 rounded-md shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                      <Image
                        src={`data:image/png;base64,${moderator.filename}`}
                        alt="Moderator"
                        width={150}
                        height={150}
                      />
                    </div>

                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        {moderator.firstname} {moderator.lastname}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-400">
                        Username: {moderator.username}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400">
                        Email: {moderator.email}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => router.push("/admin/dashboard/moderator")}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ModeratorProfile;
