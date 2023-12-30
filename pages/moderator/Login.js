import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "./utils/authContext";
import Header from "../components/header";
import ModNavBar from "./components/modnavbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false); // [1
  const [error, setError] = useState("");
  const { signin, user, checkUser } = useAuth(); // Using the signin method from the AuthContext
  const router = useRouter();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const isValidPassword = (password) => {
    return password.length >= 4;
  };

  const handleLoader = () => {
    setLoader(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoader(false);

    // Perform form validation
    if (!username || !password) {
      setError("Username and password are required");
    } else if (!isValidPassword(password)) {
      setError("Password must be at least 4 characters long");
    } else {
      setUsername("");
      setPassword("");
      setError("");
      try {
        const res = await doSignIn(username, password);
        console.log(res);
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    }
  };

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
  const fetchData = async () => {
    // Check if user.cookie is defined
    if (user.cookie) {
      // Redirect to login page if user.cookie is not defined
      router.push("/moderator/dashboard");

      return;
    } else {
      router.push("/moderator/Login");
    }
  };
  useEffect(() => {
    checkSession();
    fetchData();
  }, []);

  async function doSignIn(username, password) {
    try {
      const response = await axios.post(
        "http://localhost:3000/moderator/signin",
        {
          username: username,
          password: password,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        // The request was successful
        console.log("Sign in successful");
        signin(username, document.cookie);
        setLoader(true);
        router.push("/moderator/dashboard");
      } else {
        setError("Invalid user");
        console.log("Error:", response.data);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error; // Re-throw the error to be caught in the handleSubmit catch block
    }
  }

  const handleNewUser = () => {
    router.push("/registration");
  };

  return (
    <>
      <Header page={"Moderator | Login"} />
      <main>
        <ModNavBar />
        <div className="container mx-auto w-full ">
          <div className="h-screen grid-cols-2 grid items-center gap-10">
            <div className="flex flex-col items-center justify-center px-28 pt-20 bg-emerald-50 dark:bg-gradient-to-r from-slate-900 via-emerald-900 to-sky-900 py-20 h-[70%]">
              <Image
                src="/login.png"
                alt="Login Page"
                width={200}
                height={200}
                className="mb-5"
              />
              <h1 className="text-2xl text-center font-bold mb-2 dark:text-gray-200">
                Welcome, Moderator!
              </h1>
              <p className="text-center text-gray-700 dark:text-gray-200">
                Your role is pivotal in crafting our freelance haven. Create,
                edit, and delete reports and announcements seamlessly. Navigate
                with precision using powerful search tools. As the guardian of
                accuracy, edit freelancer and client profiles with finesse.
                Enjoy Link unique admin view, contributing to our community's
                success. Your warm welcome sets the tone for Link collaborative
                and thriving freelance environment. Thrilled to have you on
                board! 🚀
              </p>
            </div>
            <div className="flex flex-col justify-center bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 py-20 h-[70%]">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                </div>

                <div className="mt-5">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-y-4">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Username address
                        </label>
                        <div className="relative">
                          <input
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleChangeUsername}
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="password"
                            className="block text-sm mb-2 dark:text-white"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <Link
                              className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              href="../examples/html/recover-account.html"
                            >
                              Forgot password?
                            </Link>
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="flex"></div>
                        <div className="ms-3 flex flex-row justify-around">
                          <Link
                            className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="../examples/html/recover-account.html"
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>

                      <button
                        onClick={handleLoader}
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Sign in{" "}
                        {loader ? (
                          <div className="flex items-center justify-center">
                            <span className="loading loading-ring loading-xl"></span>
                          </div>
                        ) : null}
                      </button>

                      {error && (
                        <p className="text-xl text-red-600 mt-2">{error}</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
