// "use client"
// import React, { useState, useEffect } from 'react';
// import supabase from "../../supabase";

// function ProjectData() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     async function fetchProjects() {
//       try {
//         const { data, error } = await supabase.from('project_listing').select('*');
//         if (error) {
//           throw error;
//         }
//         setProjects(data);
//       } catch (error:any) {
//         console.error('Error fetching projects:', error.message);
//       }
//     }

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h2>Project Data in JSON Format</h2>
//       <pre>{JSON.stringify(projects, null, 2)}</pre>
//     </div>
//   );
// }

// export default ProjectData;
