"use client"
import React, { useState, ChangeEvent, useEffect } from "react";
import supabase from "../../../../supabase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWallet } from "@solana/wallet-adapter-react";

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

interface ProjectDetailsProps {
  params: { projectName: string };
}

const UpdateProjectForm: React.FC<ProjectDetailsProps> = ({ params }) => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  const { publicKey } = useWallet(); // Get the wallet address

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { data, error } = await supabase
          .from("project_listing")
          .select("*")
          .eq("name", params.projectName);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setProjectData(data[0]);
        } else {
          setProjectData(null);
          toast.error("Project not found!");
        }
      } catch (error: any) {
        console.error("Error fetching project data:", error.message);
        toast.error(`An error occurred while fetching project data: ${error.message}`);
      }
    };

    fetchProjectData();
  }, [params.projectName]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (projectData) {
      setProjectData((prevData: ProjectData | null) => ({
        ...prevData as ProjectData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const imageFile = e.target.files?.[0];

    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      if (projectData) {
        setProjectData((prevData: ProjectData | null) => ({
          ...(prevData as ProjectData),
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
          .from("project_listing")
          .update(projectData)
          .eq("name", params.projectName);

        if (error) {
          throw error;
        }
        localStorage.setItem('walletAddress', publicKey?.toBase58() || '');
        console.log("Project data updated successfully!");
        toast.success("Project data updated successfully!");
      } catch (error: any) {
        console.error("Error updating project data:", error.message);
        toast.error(`An error occurred while updating project data: ${error.message}`);
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-8 border border-gray-800 rounded-lg">
        {projectData && (
          <>
            <h2 className="text-2xl font-bold mb-6">Update Project</h2>
            <label htmlFor="title" className="block mb-2">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={projectData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white"
            />

            <label htmlFor="description" className="block mb-2">Description:</label>
            <textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white resize-none"
              rows={4}
            />

            <label htmlFor="bannerImageUrl" className="block mb-2">Banner Image:</label>
            <input
              type="file"
              id="bannerImageUrl"
              name="bannerImageUrl"
              onChange={(e) => handleImageChange(e, "bannerImageUrl")}
              className="mb-4"
            />
            {projectData.bannerImageUrl && (
              <img
                src={projectData.bannerImageUrl}
                alt="Project Banner Image"
                className="max-w-sm mb-4"
              />
            )}

            <label htmlFor="logoImageUrl" className="block mb-2">Logo Image:</label>
            <input
              type="file"
              id="logoImageUrl"
              name="logoImageUrl"
              onChange={(e) => handleImageChange(e, "logoImageUrl")}
              className="mb-4"
            />
            {projectData.logoImageUrl && (
              <img
                src={projectData.logoImageUrl}
                alt="Project Logo Image"
                className="max-w-sm mb-4"
              />
            )}

            <label htmlFor="githubLink" className="block mb-2">GitHub Link:</label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              value={projectData.githubLink}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white"
            />

            <label htmlFor="discordLink" className="block mb-2">Discord Link:</label>
            <input
              type="text"
              id="discordLink"
              name="discordLink"
              value={projectData.discordLink}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white"
            />

            <label htmlFor="twitterLink" className="block mb-2">Twitter Link:</label>
            <input
              type="text"
              id="twitterLink"
              name="twitterLink"
              value={projectData.twitterLink}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white"
            />

            <label htmlFor="websiteLink" className="block mb-2">Website Link:</label>
            <input
              type="text"
              id="websiteLink"
              name="websiteLink"
              value={projectData.websiteLink}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 bg-gray-800 rounded-lg text-white"
            />
            <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded-lg">Update Project</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateProjectForm;
