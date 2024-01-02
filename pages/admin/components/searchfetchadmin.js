import axios from "axios";
import { useState, useEffect } from "react";

function SearchFilter() {
  const [input, setInput] = useState("");
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin");
        setAdmins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredAdmins = admin.filter(
    (admin) =>
      (admin.username &&
        admin.username.toLowerCase().includes(input.toLowerCase())) ||
      (admin.firstName &&
        admin.firstName.toLowerCase().includes(input.toLowerCase())) ||
      (admin.lastName &&
      admin.lastName.toLowerCase().includes(input.toLowerCase()))
  );

  async function fetchAdmins() {
    try {
      const response = await axios.get("http://localhost:3000/admin");
      const admins = response.data;
      console.log(`Number of admins: ${admins.length}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="container mx-auto w-full py-20">
        <input
          type="text"
          placeholder="Type here"
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="mt-6">
          {input &&
            filteredAdmins.map((admin) => (
              <div
                key={admin.id}
                className="mb-4 p-2 bg-white rounded shadow"
              >
                {admin.username ||
                  admin.firstname ||
                  admin.lastName}
              </div>
            ))}
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">
          Show the total number of Admins
        </div>
        <div className="collapse-content">
          <p className="text-xl">{admins.length}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
