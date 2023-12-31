import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar";
import ModNavBar from "../../components/modnavbar";

function Profile() {
  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />
        <h1>Profile</h1>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
