"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import supabase from "../../supabase";

interface TeamMember {
  name: string;
  imageUrl: string;
  twitter: string;
  github: string;
}

interface FormData {
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
  teamMembers: TeamMember[]; // Array of team members
}

function MyComponent(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    name: "",
    description: "",
    creator: "",
    imageUrl: "",
    bannerImageUrl: "",
    logoImageUrl: "",
    githubLink: "",
    discordLink: "",
    twitterLink: "",
    websiteLink: "",
    teamMembers: [], // Initialize as an empty array
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTeamMembersChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: string): void => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: prevState.teamMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      ),
    }));
  };

  const addTeamMember = (): void => {
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: [...prevState.teamMembers, { name: "", imageUrl: "", twitter: "", github: "" }],
    }));
  };

  const removeTeamMember = (index: number): void => {
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: prevState.teamMembers.filter((_, i) => i !== index),
    }));
  };

  // Remaining functions (handleImageChange, uploadImage, handleSubmit) remain the same

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create a Project</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Enter the project details below.
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              action="/projectCard"
              method="post"
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Existing input fields */}
                {/* ... */}
                
                {/* Team Members */}
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleTeamMembersChange(e, index, "name")}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Image URL</label>
                      <input
                        type="text"
                        value={member.imageUrl}
                        onChange={(e) => handleTeamMembersChange(e, index, "imageUrl")}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Twitter</label>
                      <input
                        type="text"
                        value={member.twitter}
                        onChange={(e) => handleTeamMembersChange(e, index, "twitter")}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">GitHub</label>
                      <input
                        type="text"
                        value={member.github}
                        onChange={(e) => handleTeamMembersChange(e, index, "github")}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeTeamMember(index)}
                      className="text-sm text-red-500 focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="text-sm text-blue-500 focus:outline-none"
                >
                  Add Team Member
                </button>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="submit"
                  className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
