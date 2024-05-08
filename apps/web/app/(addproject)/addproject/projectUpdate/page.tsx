"use client"
import React from "react";
import ProjectUpdateForm from '../projectUpdateForm/page'
import { useFormData } from '../context/FormDataContext';

const ProjectDetailsPage = () => {
  const { formData } = useFormData();
console.log("FormData:", formData); 
  return (
    <div className=" bg-gray-200">
      {/* Display project details */}
      <h1>{formData.name}</h1>
      <p>{formData.description}</p>

      {/* Display existing project updates */}
     
      <ul>
        {formData.projectUpdates.map((update, index) => (
          <li key={index}>
            <strong>{update.date}</strong>: {update.update}
          </li>
        ))}
      </ul>

      {/* Render project update form */}
      <ProjectUpdateForm />
    </div>
  );
};

export default ProjectDetailsPage;
