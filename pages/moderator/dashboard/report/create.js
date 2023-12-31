import { useState } from "react";
import axios from "axios";
import ModNavBar from "../../components/modnavbar";
import Sidebar from "../../components/sidebar";
import Footer from "@/pages/components/Footer";
import { useRouter } from "next/router";

export default function ReportForm({ onReportCreated }) {
  const [newReport, setNewReport] = useState({
    title: "",
    description: "",
    subject: "",
    status: "pending",
  });
  const [loader, setLoader] = useState(false);
  const route = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prevReport) => ({ ...prevReport, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true); // Set loader to true before making the API call
      const response = await axios.post(
        "http://localhost:3000/reports/createReport",
        newReport
      );
      console.log("New report created:", response.data);
      onReportCreated(); // Call onReportCreated to handle loader and redirection
      route.push("/"); // Redirect to the specified route
    } catch (error) {
      console.error("Error creating new report:", error.message);
    } finally {
      setLoader(false); // Set loader to false after the API call is complete
    }
  };

  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="grid place-content-center mx-auto scale-150">
          <div className="container mx-auto p-10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Create New Report
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="max-w-md bg-white p-6 rounded-md shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newReport.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-600"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={newReport.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newReport.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <div className="mb-4"></div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  value={newReport.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="pending">Pending</option>
                  <option value="resolved">Resolved</option>
                  <option value="processing">Processing</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                {loader ? (
                  <div className="flex items-center justify-center">
                    <span className="loading loading-ring loading-xl"></span>
                  </div>
                ) : null}
                Create Report
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
