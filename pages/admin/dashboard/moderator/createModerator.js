// components/CreateModerator.js
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ModNavBar from "../../components/modnavbar";
import Sidebar from "../../components/sidebar";
import Footer from "@/pages/components/Footer";

const CreateModerator = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    // Add other form fields here
  });

  const router = useRouter();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      formData.username.trim() === "" ||
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
      // Add other validation conditions as needed
    ) {
      setError("All fields are ");
      return false;
    }

    // Additional validation logic if needed

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/moderator/createModerator",
        formData
      );

      console.log(response.data);

      router.push("/admin/dashboard/moderator"); // Redirect to the moderator list after successful creation
    } catch (error) {
      console.error("Error creating moderator:", error);
    }
  };

  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />

        <div className="h-screen grid place-content-center ml-[12rem] w-full items-center justify-center bg-blue-100 py-12 pl-4">
          <div className=" space-y-8 scale-150">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-800">
                Create Moderator
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="firstname" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    autoComplete="given-name"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="family-name"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-300 placeholder-blue-500 text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-xs italic">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create Moderator
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateModerator;
