import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar";

function Report() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <h1>Report</h1>
      </div>
      <Footer />
    </>
  );
}

export default Report;
