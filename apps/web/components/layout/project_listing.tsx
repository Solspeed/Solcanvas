"use client"
import React, { useState } from 'react';
import supabase from '../../supabase'; // Assuming supabase is imported from a separate file

function MyComponent() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('project_listing') // Double-check table name
        .insert([{ title: title }]);

      if (error) {
        throw error; // Re-throw the error for handling
      }

      console.log('Project title saved successfully!');
      // Optionally, clear the form or display a success message
      setTitle('');
    } catch (error) {
      console.error('Error saving project title:', error);
      // Present a user-friendly error message to the user
      alert('An error occurred while saving the title. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <input type="submit" value="Submit" className="submit-button bg-green-900" />
    </form>
  );
}

export default MyComponent;
