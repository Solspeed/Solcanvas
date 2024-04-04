"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import supabase from "../../supabase";

// Define the structure of the form data
interface FormData {
  title: string;
  description: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  githubLink: string;
  discordLink: string;
  twitterLink: string;
  websiteLink: string;
}

// Main component for creating a project
function MyComponent(): JSX.Element {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    bannerImageUrl: "",
    logoImageUrl: "",
    githubLink: "",
    discordLink: "",
    twitterLink: "",
    websiteLink: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      // Insert the form data into the "project_listing" table
      const { error } = await supabase.from("project_listing").insert([{ ...formData }]);

      if (error) {
        throw error;
      }

      console.log("Project data saved successfully!");

      // Clear the form fields after submission
      setFormData({
        title: "",
        description: "",
        bannerImageUrl: "",
        logoImageUrl: "",
        githubLink: "",
        discordLink: "",
        twitterLink: "",
        websiteLink: "",
      });

      // Redirect the user to the "/team" page
      window.location.href = "/team";
    } catch (error: any) {
      console.error("Error saving project data:", error.message);
      alert(`An error occurred while saving the project data. Please try again later: ${error.message}`);
    }
  };

  // Function to handle changes in image inputs
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
        setFormData((prevState) => ({ ...prevState, [fieldName]: uploadedImageUrl }));
      }
    };
    reader.readAsDataURL(imageFile);
  };

  // Function to upload an image to the specified bucket and return its URL
  const uploadImage = async (imageFile: File, bucketName: string): Promise<string | undefined> => {
    const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

    // Check if image size exceeds the limit
    if (imageFile.size > MAX_IMAGE_SIZE) {
      alert("Image size exceeds the limit of 5MB. Please choose a smaller image.");
      return;
    }

    try {
      // Upload the image to the specified bucket
      const { data, error } = await supabase.storage.from(bucketName).upload(imageFile.name, imageFile, {
        cacheControl: '3600', // Cache control for the uploaded file, optional
        upsert: false, // If true, will overwrite the file if it already exists, optional
      });

      if (error) {
        throw error;
      }

      // Return the public URL of the uploaded image
      if (data) {
        return data.path; // Return the path of the uploaded image
      } else {
        throw new Error('No data returned from Supabase storage upload.');
      }
    } catch (error:any) {
      console.error(`Error uploading ${bucketName} image:`, error.message);
      alert(`An error occurred while uploading the ${bucketName} image: ${error.message}`);
    }
  };

  // JSX code for the form
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
            <form onSubmit={handleSubmit} action="/team" method="post" className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Input fields for project details */}
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
                {/* Input fields for image URLs */}
                <div className="flex flex-col">
                  <label className="leading-loose">Banner Image</label>
                  <input
                    type="file"
                    name="bannerImage"
                    onChange={(e) => handleImageChange(e, "bannerImageUrl", "banner_image")}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Logo Image</label>
                  <input
                    type="file"
                    name="logoImage"
                    onChange={(e) => handleImageChange(e, "logoImageUrl", "logo_image")}
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
