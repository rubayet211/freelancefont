import axios from "axios";
import { useState, useEffect } from "react";

function SearchFilter() {
  const [input, setInput] = useState("");
  const [moderators, setModerators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/moderator");
        setModerators(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredModerators = moderators.filter(
    (moderator) =>
      (moderator.username &&
        moderator.username.toLowerCase().includes(input.toLowerCase())) ||
      (moderator.firstName &&
        moderator.firstName.toLowerCase().includes(input.toLowerCase())) ||
      (moderator.lastName &&
        moderator.lastName.toLowerCase().includes(input.toLowerCase()))
  );

  async function fetchModerators() {
    try {
      const response = await axios.get("http://localhost:3000/moderator");
      const moderators = response.data;
      console.log(`Number of moderators: ${moderators.length}`);
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
            filteredModerators.map((moderator) => (
              <div
                key={moderator.id}
                className="mb-4 p-2 bg-white rounded shadow"
              >
                {moderator.username ||
                  moderator.firstname ||
                  moderator.lastName}
              </div>
            ))}
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">
          Show the total number of Moderators
        </div>
        <div className="collapse-content">
          <p className="text-xl">{moderators.length}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
