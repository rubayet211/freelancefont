import Image from "next/image";
import React from "react";
import Header from "./components/header";

export default function Contact() {
  return (
    <div className="">
      <Header title="Contact" />
      <section className="text-gray-600 body-font relative ">
        <div className="absolute inset-0 pl-10">
          <Image
            src={"/contact.png"}
            alt="Contact Pic"
            height={"500"}
            width={"500"}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font dark:text-slate-100">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:text-slate-100">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                for="email"
                className="leading-7 text-sm text-gray-600 dark:text-slate-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 ">
              <label
                for="message"
                className="leading-7 text-sm text-gray-600 dark:text-slate-100"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-slate-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-slate-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3 dark:text-slate-100">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
