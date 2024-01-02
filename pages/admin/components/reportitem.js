import Link from "next/link";
import { MdOutlineReport } from "react-icons/md";

export default function ReportItem({ id, title, subject }) {
  return (
    <div className="bg-white rounded-md shadow-md m-4 h-48">
      <div className="flex flex-col items-center">
        <div className="">
          <MdOutlineReport className="text-3xl text-red-500 mt-2" />
        </div>
        <div className="p-4">
          <Link
            href={`/admin/dashboard/report/${id}`}
            className="text-violet-400 block mt-1 text-lg leading-tight font-medium hover:underline"
          >
            {title}
          </Link>
          <p className="mt-2 text-gray-500">Subject: {subject}</p>

          {/* Edit and Delete Buttons */}
          <div className="flex justify-between mt-4">
            <Link
              href={`/report/${id}/edit`}
              className="text-blue-500 hover:underline"
            >
              Edit
            </Link>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
