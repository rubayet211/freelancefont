import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdOutlineReport } from "react-icons/md";
import { useRouter } from "next/router";
import ModNavBar from "../../components/modnavbar";
import Sidebar from "../../components/sidebar";
import Footer from "@/pages/components/Footer";

function ReportDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/reports/${id}`);
        setReport(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/reports/deleteReport/${id}`);
      router.push("/reports"); // Redirect to reports page after successful deletion
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    const newStatus = e.target.status.value;
    if (["pending", "resolved", "processing", "rejected"].includes(newStatus)) {
      try {
        await axios.patch(
          `http://localhost:3000/reports/updateReportStatus/${id}`,
          {
            status: newStatus,
          }
        );
        // Refresh the report details after successful status update
        const response = await axios.get(`http://localhost:3000/reports/${id}`);
        setReport(response.data);
      } catch (error) {
        console.error("Error updating report status:", error);
      }
    } else {
      console.error(
        "Invalid status value. Status must be one of 'pending', 'resolved', 'processing', or 'rejected'."
      );
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!report) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ModNavBar />
        <div className="flex h-screen">
          <Sidebar />
          <div className="grid place-items-center mx-auto">
            <div className="bg-white rounded-md shadow-md m-4 p-4 h-[26rem]">
              <div className="flex flex-col items-center">
                <div className="justify-center">
                  <MdOutlineReport className="text-3xl text-red-500 mt-2" />
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-medium text-violet-400">
                    {report.title}
                  </h1>
                  <h2 className="text-gray-500 mt-2">
                    Subject: {report.subject}
                  </h2>
                  <p className="mt-2 text-gray-500">{report.description}</p>
                  <p className="mt-2 text-gray-500">
                    Created on:{" "}
                    {new Date(report.createDate).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-500">
                    Last updated on:{" "}
                    {new Date(report.updateDate).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-500">Status: {report.status}</p>

                  {/* Status Update Form */}
                  <form onSubmit={handleStatusUpdate}>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Update Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                      <option value="processing">Processing</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button
                      type="submit"
                      className="mt-3 text-green-500 hover:underline"
                    >
                      Update Status
                    </button>
                  </form>

                  {/* Edit and Delete Buttons */}
                  <div className="flex justify-between mt-4">
                    <Link
                      href={`/report/${id}/edit`}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default ReportDetails;
