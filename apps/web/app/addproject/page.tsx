"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase";

// Define the structure of the form data
interface FormData {
  name: string;
  title: string;
  description: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  githubLink: string;
  discordLink: string;
  twitterLink: string;
  websiteLink: string;
  teamMembers: TeamMember[]; // Array of team members
}

// Define the structure of a team member
interface TeamMember {
  name: string;
  image_url: string;
  twitter: string;
  github: string;
}

// Main component for creating a project
function MyComponent(): JSX.Element {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    description: "",
    bannerImageUrl: "",
    logoImageUrl: "",
    githubLink: "",
    discordLink: "",
    twitterLink: "",
    websiteLink: "",
    teamMembers: [{ name: "", image_url: "", twitter: "", github: "" }],
  });

  // Function to handle changes in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ): void => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const updatedTeamMembers = [...formData.teamMembers];
      if (updatedTeamMembers[index]) {
        updatedTeamMembers[index]![name as keyof TeamMember] = value;
        setFormData((prevState) => ({
          ...prevState,
          teamMembers: updatedTeamMembers,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Function to add a new team member input field
  const addTeamMember = (): void => {
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: [
        ...prevState.teamMembers,
        { name: "", image_url: "", twitter: "", github: "" },
      ],
    }));
  };

  // Function to remove a team member input field
  const removeTeamMember = (index: number): void => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: updatedTeamMembers,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();



 // Validate form fields
 if (
  formData.name.trim() === "" ||
  formData.title.trim() === "" ||
  formData.description.trim() === "" ||
  formData.bannerImageUrl.trim() === "" ||
  formData.logoImageUrl.trim() === "" ||
  formData.githubLink.trim() === "" ||
  formData.twitterLink.trim() === "" ||
  formData.websiteLink.trim() === ""
) {
  // Display error message to user indicating required fields are missing
  alert("Please fill in all required fields.");
  return;
}


    try {
      // Insert the form data into the "project_listing" table
      const { data, error } = await supabase
        .from("project_listing")
        .insert([{ ...formData }]);

      if (error) {
        throw error;
      }

      console.log("Project data saved successfully!");

      // Display success message
      toast.success("Project uploaded successfully!");

      // Clear the form fields after submission
      setFormData({
        name: "",
        title: "",
        description: "",
        bannerImageUrl: "",
        logoImageUrl: "",
        githubLink: "",
        discordLink: "",
        twitterLink: "",
        websiteLink: "",
        teamMembers: [{ name: "", image_url: "", twitter: "", github: "" }],
      });
    } catch (error: any) {
      console.error("Error saving project data:", error.message);
      alert(
        `An error occurred while saving the project data. Please try again later: ${error.message}`
      );
    }
  };

  // Function to handle changes in image inputs for banner image
  const handleBannerImageChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    handleImageChange(event, "bannerImageUrl", "banner_image");
  };

  // Function to handle changes in image inputs for logo image
  const handleLogoImageChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    handleImageChange(event, "logoImageUrl", "logo_image");
  };

  // Function to handle changes in image inputs for team members
  const handleTeamMemberImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): Promise<void> => {
    const imageFile = event.target.files?.[0];

    if (!imageFile) return;

    // Read the image file as a data URL
    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string;
      const updatedTeamMembers = [...formData.teamMembers];
      if (updatedTeamMembers[index]) {
        updatedTeamMembers[index]!.image_url = imageUrl;
        // updatedTeamMembers[index].imageFile = imageFile; // Add 'imageFile' property
        setFormData((prevState) => ({
          ...prevState,
          teamMembers: updatedTeamMembers,
        }));

        // Upload the image to the "teamMembersImage" bucket
        const uploadedImageUrl = await uploadImage(
          imageFile,
          "teamMembersImage"
        );
        if (uploadedImageUrl) {
          const updatedTeamMembers = [...formData.teamMembers];
          if (updatedTeamMembers[index]) {
            updatedTeamMembers[index]!.image_url = uploadedImageUrl;
            setFormData((prevState) => ({
              ...prevState,
              teamMembers: updatedTeamMembers,
            }));
          }
        }
      }
    };
    reader.readAsDataURL(imageFile);
  };

  // Function to handle image changes
  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string,
    bucketName: string
  ): Promise<void> => {
    const imageFile = event.target.files?.[0];

    if (!imageFile) return;

    // Read the image file as a data URL
    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string;
      setFormData((prevState) => ({ ...prevState, [fieldName]: imageUrl }));

      // Upload the image and get its URL
      const uploadedImageUrl = await uploadImage(imageFile, bucketName);
      if (uploadedImageUrl) {
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: uploadedImageUrl,
        }));
      }
    };
    reader.readAsDataURL(imageFile);
  };

  // Function to upload an image to the specified bucket and return its URL
  const uploadImage = async (
    imageFile: File,
    bucketName: string
  ): Promise<string | undefined> => {
    const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

    // Check if image size exceeds the limit
    if (imageFile.size > MAX_IMAGE_SIZE) {
      alert(
        "Image size exceeds the limit of 5MB. Please choose a smaller image."
      );
      return;
    }

    try {
      // Upload the image to the specified bucket
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(imageFile.name, imageFile, {
          cacheControl: "3600", // Cache control for the uploaded file, optional
          upsert: false, // If true, will overwrite the file if it already exists, optional
        });

      if (error) {
        throw error;
      }

      // Return the public URL of the uploaded image
      if (data) {
        // Construct the URL based on the bucket name and the file path
        const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${encodeURIComponent(data.path)}`;
        return imageUrl;
      } else {
        throw new Error("No data returned from Supabase storage upload.");
      }
    } catch (error: any) {
      console.error(`Error uploading ${bucketName} image:`, error.message);
      alert(
        `An error occurred while uploading the ${bucketName} image: ${error.message}`
      );
      return; // Return undefined in case of error
    }
  };

  // JSX code for the form
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <ToastContainer />
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
              action="/team"
              method="post"
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Input fields for project details */}
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
                <div className="flex flex-col">
                  <label className="leading-loose">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none"
                  />
                </div>
                {/* Input fields for banner image */}
                <div className="flex flex-col">
                  <label className="leading-loose">Banner Image</label>
                  <input
                    type="file"
                    name="bannerImageUrl"
                    onChange={handleBannerImageChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                {/* Input fields for logo image */}
                <div className="flex flex-col">
                  <label className="leading-loose">Logo Image</label>
                  <input
                    type="file"
                    name="logoImageUrl"
                    onChange={handleLogoImageChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                {/* Input fields for project links */}
                <div className="flex flex-col">
                  <label className="leading-loose">GitHub Link</label>
                  <input
                    type="text"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Discord Link</label>
                  <input
                    type="text"
                    name="discordLink"
                    value={formData.discordLink}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Twitter Link</label>
                  <input
                    type="text"
                    name="twitterLink"
                    value={formData.twitterLink}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Website Link</label>
                  <input
                    type="text"
                    name="websiteLink"
                    value={formData.websiteLink}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                {/* Input fields for team members */}
                {formData.teamMembers.map((teamMember, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <label className="leading-loose">
                        Team Member {index + 1}
                      </label>
                      <button
                        type="button"
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                        onClick={() => removeTeamMember(index)}
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={teamMember.name}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Name"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                    <input
                      type="file"
                      name="image_url"
                      onChange={(e) => handleTeamMemberImageChange(e, index)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />

                    <input
                      type="text"
                      name="twitter"
                      value={teamMember.twitter}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Twitter Link"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                    <input
                      type="text"
                      name="github"
                      value={teamMember.github}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="GitHub Link"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Add Team Member
                </button>
              </div>
              {/* Submit button */}
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
