"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import supabase from "../../supabase";

interface TeamMemberFormProps {
  projectId: string; // Assuming you'll pass the projectId from the parent component
}

interface TeamMemberFormData {
  name: string;
  image_url: string;
  twitter: string;
  github: string;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ projectId }) => {
  const [formData, setFormData] = useState<TeamMemberFormData>({
    name: "",
    image_url: "",
    twitter: "",
    github: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const imageFile = e.target.files?.[0];
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setFormData((prevFormData) => ({
        ...prevFormData,
        image_url: imageUrl,
      }));
    };
    reader.readAsDataURL(imageFile);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      // Assuming you have a table called 'team_members' in your database
      const { data, error } = await supabase
        .from("team_members")
        .insert([{ ...formData, project_id: projectId }]);

      if (error) {
        throw error;
      }

      console.log("Team member added successfully!");
      setFormData({
        name: "",
        image_url: "",
        twitter: "",
        github: "",
      });
    } catch (error) {
      console.error("Error adding team member:", error.message);
      alert(
        `An error occurred while adding the team member. Please try again later: ${error.message}`
      );
    }
  };

  return (
    <div className="py-8">
      <h3 className="font-semibold text-xl">Add Team Member</h3>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col">
          <label className="leading-loose">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="leading-loose">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="leading-loose">Twitter</label>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="leading-loose">GitHub</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Team Member
        </button>
      </form>
    </div>
  );
};

export default TeamMemberForm;
