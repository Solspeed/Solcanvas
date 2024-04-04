// "use client"
// import React, { useState, FormEvent, ChangeEvent } from 'react';
// import supabase from '../../supabase'; // Assuming you have Supabase client setup

// interface ProjectUpdateFormProps {
//   projectId: number;
// }

// const ProjectUpdateForm: React.FC<ProjectUpdateFormProps> = ({ projectId }) => {
//   const [updateDetails, setUpdateDetails] = useState<string>('');

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!updateDetails.trim()) {
//       alert('Please enter an update detail before submitting.');
//       return;
//     }

//     const currentTime = new Date().toISOString(); // Capture current timestamp

//     try {
//       // Update project updates in Supabase
//       const { data, error } = await supabase
//         .from('project_listing')
//         .update({
//           project_updates: supabase.raw(`COALESCE(project_updates, '') || '\n' || ?`, currentTime, updateDetails),
//         })
//         .match({ id: projectId });

//       if (error) {
//         console.error('Error adding project update:', error); // Log detailed error
//         throw error; // Re-throw for further handling (optional)
//       }

//       console.log('Project update added successfully!');
//       setUpdateDetails(''); // Clear form after successful submission
//     } catch (error:any) {
//       console.error('Error adding project update:', error.message); // Log error message
//       alert('An error occurred while adding the update. Please try again later.');
//     }
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setUpdateDetails(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="project-update-form">
//       <h3>Add Project Update</h3>
//       <textarea
//         value={updateDetails}
//         onChange={handleInputChange}
//         placeholder="Enter your project update details..."
//         className="w-full border focus:ring-gray-500 focus:border-gray-900 rounded-md px-3 py-2 text-gray-600"
//       />
//       <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//         Add Update
//       </button>
//     </form>
//   );
// };

// export default ProjectUpdateForm;
