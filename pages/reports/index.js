import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReportForm from "./ReportForm";
import ReportItem from "../moderator/components/reportitem";

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
      return <span className="loading loading-ball loading-lg"></span>;
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
      <div className="mx-auto p-1">
        <h2 className="text-2xl font-bold text-black">
          All Reports Data Listed below
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderData()}
        </div>
      </div>
      <div>
        <button className="btn btn-wide">Wide</button>
      </div>
      <div className="">
        <ReportForm onReportCreated={fetchData} />
      </div>
    </>
  );
}
