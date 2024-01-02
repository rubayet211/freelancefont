import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../components/Footer";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidPassword = (password) => {
    return password.length >= 4;
  };

  const handleLoader = () => {
    setLoader(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoader(false);

    if (!email || !password) {
      setError("Email and password are required");
    } else if (!isValidPassword(password)) {
      setError("Password must be at least 4 characters long");
    } else {
      setEmail("");
      setPassword("");
      setError("");
      try {
        const res = await doAdminSignIn(email, password);
        console.log(res);
      } catch (error) {
        console.error("Error during admin sign-in:", error);
      }
    }
  };

  function checkSession() {
    // Removed check for 'user' and 'checkUser'
    router.push("/admin/Login");
  }

  async function doAdminSignIn(email, password) {
    try {
      const res = await axios.post("http://localhost:3000/admin/login");

      if (res.status === 201) {
        console.log("Admin sign in successful");
        setLoader(true);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid admin user");
        console.log("Error:", response.data);
      }
    } catch (error) {
      console.error("Error during admin sign-in:", error);
      throw error;
    }
  }

  return (
    <>
      <main>
        <div className="container mx-auto w-full ">
          <div className="h-screen grid-cols-2 grid items-center gap-10">
            <div className="flex flex-col justify-center bg-slate-50 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 py-20 h-[70%]">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Admin Sign in
                  </h1>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
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

                    <div className="flex items-center">
                      <div className="flex"></div>
                      <div className="ms-3 flex flex-row justify-around">
                        <a
                          href="../examples/html/recover-account.html"
                          className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Forgot password?
                        </a>
                        {/* ... (unchanged code) */}
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
      </main>
      <Footer />
    </>
  );
};

export default AdminLogin;
