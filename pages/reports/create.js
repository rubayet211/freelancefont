// ReportForm.js
import { useState } from 'react';
import axios from 'axios';

export default function ReportForm({ onReportCreated }) {
  const [newReport, setNewReport] = useState({
    title: '',
    description: '',
    subject: '', 
    status: 'pending', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prevReport) => ({ ...prevReport, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/createReport', newReport);
      console.log('New report created:', response.data);
      onReportCreated();
    } catch (error) {
      console.error('Error creating new report:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Create New Report</h2>
      <form onSubmit={handleFormSubmit} className="max-w-md bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newReport.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-600">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={newReport.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newReport.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="mb-4">
          
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-semibold text-gray-600">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={newReport.status}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="processing">Processing</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Create Report
        </button>
      </form>
    </div>
  );
}
