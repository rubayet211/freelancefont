import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { GoSignOut } from "react-icons/go";
import Image from "next/image";
import { useAuth } from "../utils/authContext";
import { useRouter } from "next/router";
import { DrawerContext } from "../utils/drawerContext";

const Sidebar = () => {
  const { isOpen, openDrawer, closeDrawer } = useContext(DrawerContext);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [jsonData, setJsonData] = useState("");
  const router = useRouter();
  const { user, logout, checkUser } = useAuth();

  useEffect(() => {
    checkSession();
  }, []);

  function checkSession() {
    if (user != null) {
      fetchData();
      console.log("user:  " + user.username);
      console.log("user:  " + user.cookie);
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

  const handleLogout = () => {
    logout();
    router.push("/moderator/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="p-4 bg-blue-500 text-white rounded transform hover:scale-105 transition-transform dark:bg-blue-700"
        onClick={openDrawer}
      >
        <GoSignOut />
      </button>

      <div
        className={`fixed inset-y-0 left-0 flex flex-col w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } dark:bg-gray-800`}
      >
        <button
          className="relative top-0 right-0 p-4 mx-24 my-2 py-2 bg-red-500 text-white rounded dark:bg-red-700 w-fit"
          onClick={closeDrawer}
        >
          Close
        </button>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            src="/path/to/profile/pic"
            alt="Profile Pic"
            className="w-24 h-24 rounded-full"
            width={100}
            height={100}
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-700 dark:text-white">
            Name
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">Role</p>
        </div>
        <div className="flex-grow p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/moderator/dashboard"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/moderator/dashboard/admin"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                href="/moderator/dashboard/moderator"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Moderator
              </Link>
            </li>
            <li>
              <Link
                href="/moderator/dashboard/announcement"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Announcement
              </Link>
            </li>
            <li>
              <Link
                href="/moderator/dashboard/report"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Report
              </Link>
            </li>
            <li>
              <Link
                href="/moderator/dashboard/client"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Client
              </Link>
            </li>
            <li>
              <Link
                href="/moderator/dashboard/freelancer"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              >
                Freelancer
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 mt-auto">
          <ul className="space-y-2">
            <li>
              <Link
                href="/settings"
                className="block py-1 px-3 rounded bg-green-500 text-white dark:bg-green-700 dark:text-white"
              >
                Setting
              </Link>
            </li>
            <li>
              <button
                className="block py-1 px-3 rounded bg-red-500 text-white dark:bg-red-700 dark:text-white"
                onClick={toggleModal}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={toggleModal}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-medium text-gray-800">
                    Are you sure you want to logout?
                  </h4>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                      onClick={toggleModal}
                    >
                      Yes
                    </button>
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={toggleModal}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
