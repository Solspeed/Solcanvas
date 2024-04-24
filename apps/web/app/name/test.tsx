import React from 'react';
import { useFormContext } from '../context/test'; // Import the custom hook useFormContext

function SomeComponent() {
  // Consume the form context
  const { formData } = useFormContext();

  // Access the name field
  const projectName = formData.name;

  // Render the component with the project name
  return (
    <div>
      <h1>Project Name: {projectName}</h1>
    </div>
  );
}

export default SomeComponent;
