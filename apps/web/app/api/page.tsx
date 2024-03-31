"use client"
import React, { useState, useEffect } from 'react';
import supabase from '../../supabase';

function MyComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('project_listing')
      .select('*');

    if (error) {
      console.error('Error fetching projects:', error);
      return;
    }

    setProjects(data);
  };

  return (
    <div>
      <h1>Project Listing</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <pre>{JSON.stringify(project, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;