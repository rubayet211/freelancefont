import Button from "@/pages/components/Button";
import Navbar from "@/pages/components/Navbar";
import React from "react";

function ModNavBar() {
  return (
    <div className="bg-slate-800 static top-0">
      <Navbar
        design="flex justify-between items-center py-3 px-5"
        template={
          <>
            <h1 className="text-white text-3xl font-bold">Freelance</h1>
            <div className="flex items-center space-x-5 text-xs">
              <div className="space-x-5">
                <Button
                  text="Sign Up"
                  design="bg-slate-500 text-white px-5 py-2 rounded font-bold"
                />
                <Button
                  text="Sign In"
                  design="text-white border px-5 py-2 rounded font-bold"
                />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default ModNavBar;
