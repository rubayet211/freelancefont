import React from "react";

import Image from "next/image";
import Sidebar from "../components/sidebar";
import ModNavBar from "../components/modnavbar";
import Footer from "@/pages/components/Footer";

export default function Dashboard() {
  return (
    <>
      <ModNavBar />
      <div className="flex h-screen">
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
