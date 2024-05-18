// // AdminDashboard.tsx
// import React, { useEffect, useState } from "react";
// import supabase from "../../../supabase";
// import StatusUpdateButtons from "./StatusUpdateButtons"; // Import your component

// interface ProjectProps {
//   // ... (your existing ProjectProps interface)
// }

// const AdminDashboard: React.FC = () => {
//   // ... (state and useEffect for fetching projects remain the same)

//   const handleStatusChange = (newStatus: "live" | "review" | "rejected") => {
//     setProjects((prevProjects) =>
//       prevProjects.map((project) =>
//         project.tagline === project.tagline &&
//         project.walletId === project.walletId
//           ? { ...project, status: newStatus }
//           : project
//       )
//     );
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for better layout */}
//         {projects.map((project) => (
//           <div
//             key={`${project.walletId}-${project.tagline}`}
//             className="flex items-center p-4 bg-gray-800 rounded-lg"
//           >
//             {/* Project Information */}
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{project.tagline}</h3>
//               <p>Wallet ID: {project.walletId}</p>
//               {/* ... other project details ... */}
//               <p>Status: {project.status}</p>
//             </div>

//             {/* Status Update Buttons */}
//             <StatusUpdateButtons
//               walletId={project.wallet_id}
//               tagline={project.tagline}
//               initialStatus={project.status}
//               onStatusChange={handleStatusChange}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
