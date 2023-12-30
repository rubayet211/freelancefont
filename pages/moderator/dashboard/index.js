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
        <div className="flex-1 flex flex-col overflow-hidden ml-48">
          <main className="flex-1 overflow-x-hidden overflow-y-auto ">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
              <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Edit
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          1
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Mark
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          Otto
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          @mdo
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <Image
                            src="/user.svg"
                            width={30}
                            height={30}
                            alt="user"
                          />
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button className="ml-6">
                            <Image
                              src="/edit.svg"
                              alt="edit icon"
                              width={24}
                              height={24}
                            />
                          </button>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button className="ml-6">
                            <Image
                              src="/delete.svg"
                              alt="delete icon"
                              width={24}
                              height={24}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
