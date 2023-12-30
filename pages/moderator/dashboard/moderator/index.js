import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar";

function Moderator() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <h1>Moderator</h1>
      </div>
      <Footer />
    </>
  );
}

export default Moderator;
