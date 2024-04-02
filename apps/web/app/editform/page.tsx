"use client"
import React, { useState } from "react";
import supabase from "../../supabase";

interface ProjectData {
  id: number;
  title: string;
  name: string;
  description: string;
  creator: string;
  imageUrl: string;
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={handleNameChange}
        />
        <button type="submit">Fetch Project Data</button>
      </form>

      {projectData && (
        <div>
          <h2>Update Project</h2>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectData.title}
            onChange={handleChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
          ></textarea>

          <label htmlFor="creator">Creator Name:</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={projectData.creator}
            onChange={handleChange}
          />

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={(e) => handleImageChange(e, "imageUrl")}
          />
          {projectData.imageUrl && (
            <img src={projectData.imageUrl} alt="Project Image" style={{ maxWidth: "200px" }} />
          )}

          <label htmlFor="bannerImageUrl">Banner Image:</label>
          <input
            type="file"
            id="bannerImageUrl"
            name="bannerImageUrl"
            onChange={(e) => handleImageChange(e, "bannerImageUrl")}
          />
          {projectData.bannerImageUrl && (
            <img
              src={projectData.bannerImageUrl}
              alt="Project Banner Image"
              style={{ maxWidth: "200px" }}
            />
          )}

          <label htmlFor="logoImageUrl">Logo Image:</label>
          <input
            type="file"
            id="logoImageUrl"
            name="logoImageUrl"
            onChange={(e) => handleImageChange(e, "logoImageUrl")}
          />
          {projectData.logoImageUrl && (
            <img
              src={projectData.logoImageUrl}
              alt="Project Logo Image"
              style={{ maxWidth: "200px" }}
            />
          )}

          <label htmlFor="githubLink">GitHub Link:</label>
          <input
            type="text"
            id="githubLink"
            name="githubLink"
            value={projectData.githubLink}
            onChange={handleChange}
          />

          <label htmlFor="discordLink">Discord Link:</label>
          <input
            type="text"
            id="discordLink"
            name="discordLink"
            value={projectData.discordLink}
            onChange={handleChange}
          />

          <label htmlFor="twitterLink">Twitter Link:</label>
          <input
            type="text"
            id="twitterLink"
            name="twitterLink"
            value={projectData.twitterLink}
            onChange={handleChange}
          />

          <label htmlFor="websiteLink">Website Link:</label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            value={projectData.websiteLink}
            onChange={handleChange}
          />

          <button onClick={handleUpdate}>Update Project</button>
        </div>
      )}
    </div>
  );
};

export default UpdateProjectForm;
