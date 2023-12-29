import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import NavBar from "../components/navbar";
import ReportForm from "./create";

function ReportItem({ id, name }) {
  return (
    <div key={id}>
      <Link href={`/report/${id}`}>
        <h3 className="text-ellipsis text-cyan-700">{name}</h3>
      </Link>
    </div>
  );
}

export default function AllReports() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/reports");
      // const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/reports');
      console.log("response", response.data);
      const jsonData = response.data;
      setJsonData(jsonData);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  }

  const renderData = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!jsonData || jsonData.length === 0) {
      return <p>No data available.</p>;
    }

    return jsonData.map((item) => <ReportItem key={item.id} {...item} />);
  };

  return (
    <>
      <ReportForm />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          All Reports Data Listed below
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jsonData?.map((data) => (
            <div key={data.id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{data.title}</p>
              <p className="text-sm text-gray-500">{data.description}</p>
              <p className="text-sm text-gray-500">ID: {data.id}</p>
              <p className="text-sm text-gray-500">
                Created: {data.createDate}
              </p>
              <p className="text-sm text-gray-500">
                Updated: {data.updateDate}
              </p>
              <p
                className={`text-sm ${
                  data.status === "completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Status: {data.status}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
}
