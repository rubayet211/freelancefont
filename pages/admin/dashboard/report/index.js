import React, { useEffect, useState } from "react";
import ReportItem from "../../components/reportitem";
import ModNavBar from "../../components/modnavbar";
import Sidebar from "../../components/sidebar";
import Footer from "@/pages/components/Footer";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/reports")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setReports(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (reports.length === 0) {
    return <div>No reports found</div>;
  } else {
    return (
      <>
        <ModNavBar />
        <div className="flex h-screen">
          <Sidebar />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-72">
            {reports.map((report) => (
              <ReportItem
                key={report.id}
                id={report.id}
                title={report.title}
                subject={report.subject}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
