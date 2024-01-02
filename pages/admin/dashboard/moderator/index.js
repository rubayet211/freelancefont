// components/Moderator.js
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import Image from "next/image";
import ModNavBar from "../../components/modnavbar";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from "next/link";
import SearchFilter from "../../components/searchfetch";
import Footer from "@/pages/components/Footer";
import CreateModerator from "./createModerator";

function Moderator() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/moderator", {
          headers: {
            withCredentials: true,
          },
        });
        const jsonData = response.data;
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ModNavBar />

      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden ml-48">
          <main className="flex-1 overflow-x-hidden overflow-y-auto ">
            <div className="container mx-auto px-6 py-8">
              {/* Create Moderator button */}
              <Link
                href="/admin/dashboard/moderator/createModerator"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                <>Create Moderator</>
              </Link>
              <h3 className="text-gray-700 text-3xl font-medium dark:text-slate-100">
                List of Moderators
              </h3>
              <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Username
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          View
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => (
                          <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.id}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.username}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.email}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                <Link
                                  href={`/admin/dashboard/moderator/${item.id}`}
                                >
                                  View
                                </Link>
                              </button>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                className="ml-6"
                                onClick={async () => {
                                  try {
                                    const response = await axios.delete(
                                      `http://localhost:3000/moderator/${item.id}`
                                    );
                                    console.log(response.data);
                                    // Refresh the data or remove the item from the state
                                  } catch (error) {
                                    console.error(
                                      "Error deleting moderator:",
                                      error
                                    );
                                  }
                                }}
                              >
                                <FaTrash className="text-red-500 text-2xl" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Moderator;
