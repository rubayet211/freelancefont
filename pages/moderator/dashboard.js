import React from "react";
import { useState } from "react";
import ModSideBar from "../components/sidebar";
import Siderbar from "../components/sidebar";

function DashBoard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-full">
      <Siderbar />
      <h1>Hello</h1>
    </div>
  );
}

export default DashBoard;
