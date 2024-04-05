// "use client"
// import React, { useState, FormEvent, ChangeEvent } from 'react';
// import supabase from '../../supabase'; // Assuming you have Supabase client setup

// interface ProjectUpdateFormProps {
//   // No need for projectId prop anymore
// }

// const ProjectUpdateForm: React.FC<ProjectUpdateFormProps> = () => {
//   const [projectName, setProjectName] = useState<string>('');
//   const [updateDetails, setUpdateDetails] = useState<string>('');

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!projectName.trim()) {
//       alert('Please enter the project name before submitting.');
//       return;
//     }

//     if (!updateDetails.trim()) {
//       alert('Please enter an update detail before submitting.');
//       return;
//     }

//     const currentTime = new Date().toISOString(); // Capture current timestamp

//     try {
//       // Fetch the project by name
//       const { data: projectData, error: projectError } = await supabase
//         .from('project_listing')
//         .select('id')
//         .eq('name', projectName)
//         .single();

//       if (projectError || !projectData) {
//         console.error('Error fetching project:', projectError);
//         alert('Project not found. Please enter a valid project name.');
//         return;
//       }

//       // Update project updates in Supabase
//       const { error } = await supabase
//       .from('project_listing')
//       .update({     
//         project_updates: supabase.sql`COALESCE(project_updates, '') || '\n' || ? || ' ' || ?`, 
//         currentTime, 
//         updateDetails
//       })
//       .match({ id: projectData.id });

//     if (error) {
//       console.error('Error adding project update:', error);
//       throw error;
//     } 

//       console.log('Project update added successfully!');
//       setProjectName('');
//       setUpdateDetails('');
//     } catch (error:any) {
//       console.error('Error adding project update:', error);
//       alert(`An error occurred while adding the update: ${error.message}`);
//     }
//   };

//   const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setProjectName(event.target.value);
//   };

//   const handleUpdateDetailsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setUpdateDetails(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="project-update-form">
//       <h3>Add Project Update</h3>
//       <input
//         type="text"
//         value={projectName}
//         onChange={handleProjectNameChange}
//         placeholder="Enter project name..."
//         className="w-full border focus:ring-gray-500 focus:border-gray-900 rounded-md px-3 py-2 text-gray-600"
//       />
//       <textarea
//         value={updateDetails}
//         onChange={handleUpdateDetailsChange}
//         placeholder="Enter your project update details..."
//         className="w-full border focus:ring-gray-500 focus:border-gray-900 rounded-md px-3 py-2 text-gray-600 mt-2"
//       />
//       <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//         Add Update
//       </button>
//     </form>
//   );
// };

// export default ProjectUpdateForm;
