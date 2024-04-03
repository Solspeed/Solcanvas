"use client"
import React, { useState } from "react";
import supabase from "../../supabase";

interface ProjectData {
  id: number;
  title: string;
  name: string;
  description: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  githubLink: string;
  discordLink: string;
  twitterLink: string;
  websiteLink: string;
}

const UpdateProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState("");
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from<ProjectData>("project_listing")
        .select("*")
        .eq("name", projectName);

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        setProjectData(data[0]);
      } else {
        setProjectData(null);
        alert("Project not found!");
      }
    } catch (error) {
      console.error("Error fetching project data:", error.message);
      alert(`An error occurred while fetching project data: ${error.message}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (projectData) {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const imageFile = e.target.files?.[0];

    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      if (projectData) {
        setProjectData((prevData) => ({
          ...prevData,
          [fieldName]: imageUrl,
        }));
      }
    };
    reader.readAsDataURL(imageFile);
  };

  const handleUpdate = async () => {
    if (projectData) {
      try {
        const { error } = await supabase
          .from<ProjectData>("project_listing")
          .update(projectData)
          .eq("name", projectName);

        if (error) {
          throw error;
        }

        console.log("Project data updated successfully!");
        // Optionally, you can redirect the user to another page after successful update
      } catch (error) {
        console.error("Error updating project data:", error.message);
        alert(`An error occurred while updating project data: ${error.message}`);
      }
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label htmlFor="projectName" style={{ display: "block", marginBottom: "5px" }}>Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={handleNameChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Fetch Project Data</button>
      </form>

      {projectData && (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Update Project</h2>
          <label htmlFor="title" style={{ display: "block", marginBottom: "5px" }}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
          />

          <label htmlFor="description" style={{ display: "block", marginBottom: "5px" }}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px", minHeight: "100px" }}
          ></textarea>

          <label htmlFor="bannerImageUrl" style={{ display: "block", marginBottom: "5px" }}>Banner Image:</label>
          <input
            type="file"
            id="bannerImageUrl"
            name="bannerImageUrl"
            onChange={(e) => handleImageChange(e, "bannerImageUrl")}
            style={{ marginBottom: "10px" }}
          />
          {projectData.bannerImageUrl && (
            <img
              src={projectData.bannerImageUrl}
              alt="Project Banner Image"
              style={{ maxWidth: "200px", marginBottom: "10px" }}
            />
          )}

          <label htmlFor="logoImageUrl" style={{ display: "block", marginBottom: "5px" }}>Logo Image:</label>
          <input
            type="file"
            id="logoImageUrl"
            name="logoImageUrl"
            onChange={(e) => handleImageChange(e, "logoImageUrl")}
            style={{ marginBottom: "10px" }}
          />
          {projectData.logoImageUrl && (
            <img
              src={projectData.logoImageUrl}
              alt="Project Logo Image"
              style={{ maxWidth: "200px", marginBottom: "10px" }}
            />
          )}

          <label htmlFor="githubLink" style={{ display: "block", marginBottom: "5px" }}>GitHub Link:</label>
          <input
            type="text"
            id="githubLink"
            name="githubLink"
            value={projectData.githubLink}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
          />

          <label htmlFor="discordLink" style={{ display: "block", marginBottom: "5px" }}>Discord Link:</label>
          <input
            type="text"
            id="discordLink"
            name="discordLink"
            value={projectData.discordLink}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
          />

          <label htmlFor="twitterLink" style={{ display: "block", marginBottom: "5px" }}>Twitter Link:</label>
          <input
            type="text"
            id="twitterLink"
            name="twitterLink"
            value={projectData.twitterLink}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
          />

          <label htmlFor="websiteLink" style={{ display: "block", marginBottom: "5px" }}>Website Link:</label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            value={projectData.websiteLink}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
          />

          <button onClick={handleUpdate} style={{ background: "#28a745", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Update Project</button>
        </div>
      )}
    </div>
  );
};

export default UpdateProjectForm;
