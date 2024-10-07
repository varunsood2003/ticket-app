"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ updatedData,editMode }: any) => {
  const router = useRouter();
  const fixedData = updatedData.res;
  const defaultData = {
    title: "",
    description: "",
    category: "Software",
    priority: 1,
    progress: 0,
    status: "Not yet started",
    active: true,
  };

  const [formData, setFormData] = useState(fixedData || defaultData);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === "radio" ? parseInt(value) : value;
    setFormData((prev:any) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      let res;
      if (editMode) {
        const { createdAt, updatedAt, ...filteredData } = formData;
        res = await fetch(`/api/Tickets/${formData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        });
  
        if (!res.ok) {
          throw new Error("Failed to update ticket");
        }
      } else {
        const { createdAt, updatedAt, ...filteredData } = formData; 
        res = await fetch("/api/Tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        });
  
        if (!res.ok) {
          throw new Error("Failed to create ticket");
        }
      }
      router.refresh();
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating/updating the ticket. Please try again.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-page">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {editMode ? "Update Ticket": "Create New Ticket"}
        </h3>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
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

        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
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

        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
          Priority
        </label>
        <div>
          {[1, 2, 3, 4, 5].map((priority) => (
            <div key={priority}>
              <input
                type="radio"
                id={`priority-${priority}`}
                name="priority"
                onChange={handleChange}
                value={priority}
                checked={formData.priority === priority}
              />
              <label className="px-2 text-black">{priority}</label>
            </div>
          ))}
        </div>

        <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
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

        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2 mt-2">
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
          value={editMode ? "Update Ticket": "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
