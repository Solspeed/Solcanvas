"use client";
import React, { useEffect, useState } from "react";
import supabase from "../../../supabase";

interface ProjectProps {
  id: string;
  logoImageUrl: string;
  tagline: string;
  description: string;
  status: string;
  wallet_id: string;
}

const AdminDashboard: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from("project_listing").select("*");

        if (error) {
          console.error("Error fetching projects:", error.message);
        } else {
          setProjects(data || []);
        }
      } catch (error: any) {
        console.error("Error fetching projects:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const updateProjectStatus = async (projectId: string, status: string) => {
    try {
      const { error } = await supabase
        .from("project_listing")
        .update({ status })
        .eq("id", projectId);

      if (error) {
        console.error("Error updating project status:", error.message);
      } else {
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === projectId ? { ...project, status } : project
          )
        );
      }
    } catch (error: any) {
      console.error("Error updating project status:", error.message);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tagline</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.tagline}</td>
                <td>{project.description}</td>
                <td>{project.status}</td>
                <td>
                  <button onClick={() => updateProjectStatus(project.id, "live")}>Approve</button>
                  <button onClick={() => updateProjectStatus(project.id, "rejected")}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
