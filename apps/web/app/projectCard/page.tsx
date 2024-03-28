// Assuming you have a ProjectCard component to render each project card
"use client";
import React, { useState, useEffect } from "react";
import supabase from '../../supabase'
import ProjectCard from "../Card/page";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from("project_listing").select("*");
        if (error) {
          throw error;
        }
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;