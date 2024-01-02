import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { GoSignOut } from "react-icons/go";
import Image from "next/image";
import { DrawerContext } from "../utils/drawerContext";
import axios from "axios";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { isOpen, openDrawer, closeDrawer } = useContext(DrawerContext);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [jsonData, setJsonData] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkSession();
    const fetchData = async () => {
      // Check if user.cookie is defined
      // Redirect to login page if user.cookie is not defined
      // You can add your own logic for checking the session, if needed
    };
    fetchData();
  }, []);

  function checkSession() {
    // You can add your own logic for checking the session, if needed
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

  const imageUrl = URL.createObjectURL(new Blob([jsonData.imageData]));

  const handleLogout = () => {
    // You can add your own logic for handling logout, if needed
    router.push("/admin/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="p-4 bg-blue-500 text-white rounded transform hover:scale-105 transition-transform "
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
          className="relative top-0 right-0 p-4 mx-24 my-2 py-2 bg-red-500 text-white rounded "
          onClick={closeDrawer}
        >
          Close
        </button>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            src="/contact.png"
            alt="Description of image"
            width={50}
            height={50}
          />
          <h2 className="mt-2 text-lg font-semibold text-gray-700 ">
            {jsonData.username}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">Admin</p>
        </div>
        <div className="flex-grow p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/dashboard"
                className="block py-1 px-3 rounded bg-blue-500 text-white "
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/admin/dashboard/admin"
                className="block py-1 px-3 rounded bg-blue-500 text-white dark:text-white"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/moderator"
                className="block py-1 px-3 rounded bg-blue-500 text-white  dark:text-white"
              >
                Moderator
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/announcement"
                className="block py-1 px-3 rounded bg-blue-500 text-white  dark:text-white"
              >
                Announcement
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/report"
                className="block py-1 px-3 rounded bg-blue-500 text-white  dark:text-white"
              >
                Report
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/client"
                className="block py-1 px-3 rounded bg-blue-500 text-white  dark:text-white"
              >
                Client
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/freelancer"
                className="block py-1 px-3 rounded bg-blue-500 text-white  dark:text-white"
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
            className="fixed inset-0 w-full h-full bg-white opacity-40"
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
                      className="w-full mt-2 p-2.5 flex-1 text-black bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                      onClick={() => {
                        toggleModal();
                        handleLogout();
                      }}
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
