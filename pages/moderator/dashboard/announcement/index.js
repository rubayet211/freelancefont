import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar";

function Announcement() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <h1>Announcement</h1>
      </div>
      <Footer />
    </>
  );
}

export default Announcement;
