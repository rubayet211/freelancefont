import React from "react";
import axios from "axios";
import { useState } from "react";
import Sidebar from "@/pages/moderator/components/sidebar";
import ModNavBar from "@/pages/moderator/components/modnavbar";
import Footer from "@/pages/components/Footer";

export default function UpdateModerator({
  id,
  initialData = {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  },
}) {
  // Initialize data with initialData or a default object
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/moderator/${id}`,
        data
      );
      console.log(response.data);
      // Refresh the data or update the state
    } catch (error) {
      console.error("Error updating moderator:", error);
    }
  };

  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full max-w-sm mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="username"
                name="username"
                type="text"
                value={data.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                name="email"
                type="text"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="firstname"
                name="firstname"
                type="text"
                value={data.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="lastname"
                name="lastname"
                type="text"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 font-bold mb-1 md:mb-0"
                htmlFor="filename"
              >
                Filename
              </label>
              <input
                className="file-input w-full max-w-xs"
                id="filename"
                name="filename"
                type="text"
                value={data.filename}
                onChange={data.filename}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
