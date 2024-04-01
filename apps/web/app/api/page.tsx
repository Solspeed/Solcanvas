"use client"
import React, { useState, useEffect } from 'react';
import supabase from '../../supabase';

function MyComponent() {
  const [projectData, setProjectData] = useState({
    projectList: [],
    teamMemberList: [],
  });

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      const { data: projects, error: projectError } = await supabase
        .from('project_listing')
        .select('*');
      const { data: teamMembers, error: teamMemberError } = await supabase
        .from('team_members')
        .select('*');

      if (projectError) {
        throw projectError;
      }

      if (teamMemberError) {
        throw teamMemberError;
      }

      setProjectData({
        projectList: projects || [],
        teamMemberList: teamMembers || [],
      });
    } catch (error) {
      console.error('Error fetching project data:', error.message);
    }
  };

  return (
    <div>
      <h1>Project Listing</h1>
      <h2>Projects:</h2>
      {projectData.projectList.map((project) => (
        <div key={project.id}>
          <pre>{JSON.stringify(project, null, 2)}</pre>
          <h3>Team Members:</h3>
          {projectData.teamMemberList.filter(
            (member) => member.project_id === project.id
          ).map((member) => (
            <div key={member.id}>
              <pre>{JSON.stringify(member, null, 2)}</pre>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
