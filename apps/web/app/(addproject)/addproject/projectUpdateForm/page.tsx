"use client"
import React, { useState } from "react";
import { useFormData } from '../context/FormDataContext';

const ProjectUpdateForm = () => {
  const { addProjectUpdate } = useFormData();
  const [update, setUpdate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (update.trim() === "") return; // Prevent empty updates

    const newProjectUpdate = {
      date: new Date().toLocaleDateString("en-GB"), // Format: DD/MM/YY
      update: update.trim(),
    };

    addProjectUpdate(newProjectUpdate);
    setUpdate(""); // Clear input after adding update
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
        placeholder="Add project update..."
        rows={4}
        cols={50}
      />
      <button className=" bg-white" type="submit">Add Update</button>
    </form>
  );
};

export default ProjectUpdateForm;
