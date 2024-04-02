// "use client"
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import supabase from "../../supabase";

// interface FormData {
//   title: string;
//   name: string;
//   description: string;
//   creator: string;
//   imageUrl: string;
// }

// function MyComponent(): JSX.Element {
//   const [formData, setFormData] = useState<FormData>({
//     title: "",
//     name: "",
//     description: "",
//     creator: "",
//     imageUrl: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const uploadImage = async (imageFile: File): Promise<string | undefined> => {
//     const MAX_IMAGE_SIZE = 5 * 1024 * 1024; 

//     if (imageFile.size > MAX_IMAGE_SIZE) {
//       alert("Image size exceeds the limit of 5MB. Please choose a smaller image.");
//       return;
//     }

//     try {
//       const { data, error } = await supabase.storage.from("project_images").upload(imageFile.name, imageFile);

//       if (error) {
//         throw error;
//       }

//       return data?.publicUrl;
//     }catch (error) {
//         console.error("Error uploading image:", error.message); // Access the message property
//         alert(`An error occurred while uploading the image: ${error.message}`); // Display user-friendly alert with details
//       }
//   };

//   const handleImageChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
//     const imageFile = event.target.files?.[0];

//     if (!imageFile) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const imageUrl = e.target?.result as string;
//       setFormData((prevState) => ({ ...prevState, imageUrl }));
//     };
//     reader.readAsDataURL(imageFile);

//     const uploadedImageUrl = await uploadImage(imageFile);
//     if (uploadedImageUrl) {
//       setFormData((prevState) => ({ ...prevState, imageUrl: uploadedImageUrl }));
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
//     event.preventDefault();

//     try {
//       const { data, error } = await supabase.from("project_listing").insert([{ ...formData }]);

//       if (error) {
//         throw error;
//       }

//       console.log("Project data saved successfully!");
//       setFormData({
//         title: "",
//         name: "",
//         description: "",
//         creator: "",
//         imageUrl: "",
//       });

     
//       window.location.href = "/projectCard";
//     } catch (error) {
//       console.error("Error saving project data:", error.message);
//       alert(`An error occurred while saving the project data. Please try again later: ${error.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center space-x-5">
//               <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
//                 <h2 className="leading-relaxed">Create a Project</h2>
//                 <p className="text-sm text-gray-500 font-normal leading-relaxed">
//                   Enter the project details below.
//                 </p>
//               </div>
//             </div>
//             <form
//               onSubmit={handleSubmit}
//               action="/projectCard"
//               method="post"
//               className="divide-y divide-gray-200"
//             >
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Title</label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Description</label>
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Creator Name</label>
//                   <textarea
//                     name="creator"
//                     value={formData.creator}
//                     onChange={handleChange}
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="leading-loose">Image</label>
//                   <input
//                     type="file"
//                     name="image"
//                     onChange={handleImageChange}
//                     className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                   />
//                 </div>
//               </div>
//               <div className="pt-4 flex items-center space-x-4">
//                 <button
//                   type="submit"
//                   className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyComponent;