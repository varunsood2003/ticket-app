"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingData = {
    title: "",
    description: "",
    category: "Software",
    priority: 1,
    progress: 0,
    status: "Not yet started", // Fix status case
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.type === "range" ? parseInt(e.target.value) : e.target.value; // Handle range input
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", formData);
  };

  const [formData, setFormData] = useState(startingData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-page">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Create Your Ticket
        </h3>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required
            value={formData.title}
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2 mt-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            required
            value={formData.description}
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-2 mt-2"
        >
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
          <option value="Project">Project</option>
        </select>
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700 mb-2 mt-2"
        >
          Priority
        </label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="px-2 text-black">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="px-2 text-black">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="px-2 text-black">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="px-2 text-black">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className="px-2 text-black">5</label>
        </div>
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700 mb-2 mt-2"
        >
          Progress
        </label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
          className="w-full"
        />
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-2 mt-2"
        >
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Not yet started">Not yet started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="submit"
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md"
          value="Create Ticket"
        />
      </form>
    </div>
  );
};

export default TicketForm;
