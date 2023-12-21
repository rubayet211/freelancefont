import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
