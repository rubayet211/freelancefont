import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="p-4 bg-white shadow justify-evenly md:flex md:items-center md:justify-between dark:bg-gray-800 sticky top-0 ">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] font-bold cursor-pointer dark:text-white">
          <Image
            className="h-10 inline"
            src="/Logo1.png"
            alt="Logo"
            width={30}
            height={15}
          />
          <Link href={"/"}>Freelance</Link>
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onClick="Menu(this)"></ion-icon>
        </span>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white dark:bg-gray-800 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/"
            className="text-xl hover:text-cyan-500 duration-500 font-bold dark:text-white dark:hover:text-cyan-100"
          >
            HOME
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/browse"
            className="text-xl hover:text-cyan-500 duration-500 font-bold dark:text-white dark:hover:text-cyan-100"
          >
            BROWSE
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/about"
            className="text-xl hover:text-cyan-500 duration-500 font-bold dark:text-white dark:hover:text-cyan-100"
          >
            ABOUT
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/contact"
            className="text-xl hover:text-cyan-500 duration-500 font-bold dark:text-white dark:hover:text-cyan-100"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div>
        <button
          className="bg-teal-950 font-bold text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-teal-600 rounded dark:text-white dark:hover:text-gray-800"
          onClick={() => router.push("/login")}
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
}
