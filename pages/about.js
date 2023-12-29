import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/header";

export default function About() {
  return (
    <body className="py-20">
      <Header title="About" />
      <h1 className="text-4xl font-bold text-center text-emerald-500">ABOUT</h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex flex-col bg-white border drop-shadow shadow-sm rounded-xl dark:bg-gradient-to-r from-slate-900  to-sky-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="p-2 md:p-10">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Learn about us
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-left">
                We empower people worldwide to live their work dream by working{" "}
                <br />
                in freelance from the ground up and also to help clients find
                talented <br />
                skilled individuals who can complete their project.
              </p>
              <Link
                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                alt="Learn More"
              >
                <button>Learn More</button>

                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/about.png"}
            width={500}
            height={500}
            alt="About Page Image"
          />
        </div>
      </div>
    </body>
  );
}
