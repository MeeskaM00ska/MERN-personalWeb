import React from "react";
import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormdata] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    tools: "",
    imageUrls: [],
  });

  return (
    <main className="bg-slate-100 p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-7">Create a listing</h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            id="name"
            required
            value={formData.name}
          />
          <input
            type="text"
            placeholder="description"
            id="description"
            required
            value={formData.description}
          />
          <input
            type="text"
            placeholder="startDate"
            id="startDate"
            required
            value={formData.startDate}
          />
          <input
            type="text"
            placeholder="endDate"
            id="endDate"
            required
            value={formData.endDate}
          />
          <input
            type="text"
            placeholder="tools"
            id="tools"
            required
            value={formData.tools}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <p>images</p>
          <div>
            <input type="file" id="images" accept="image/*" multiple />
            <button className="border border-green-300">upload</button>
          </div>
        </div>
      </form>
    </main>
  );
}
