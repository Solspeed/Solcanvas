// "use client"
// import { useState, useEffect } from "react";
// import { useFormData } from "../../../(addproject)/addproject/context/FormDataContext";
// import supabase from "../../../../supabase";

// export default function Updates() {
//   const { formData, addProjectUpdate } = useFormData();
//   const [newUpdateText, setNewUpdateText] = useState("");
//   const [projectUpdates, setProjectUpdates] = useState([]);

//   useEffect(() => {
//     const fetchUpdates = async () => {
//       const currentUrl = window.location.href;
//       const projectName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

//       const { data, error } = await supabase
//         .from("project_listing")
//         .select("project_update")
//         .eq("name", projectName);

//       if (error) {
//         console.error("Error fetching project updates:", error.message);
//         return;
//       }

//       if (data && data.length > 0) {
//         const updates = data[0]?.project_update || [];
//         setProjectUpdates(updates);
//       }
//     };

//     fetchUpdates();
//   }, []);

//   const handleAddUpdate = async () => {
//     if (!newUpdateText.trim()) return;

//     const currentDate = new Date();
//     const newUpdate = { date: currentDate.toString(), update: newUpdateText };
//     const [projectUpdates, setProjectUpdates] = useState([] as { date: string; update: string; }[]);
//     const projectName = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);

//     const { data, error } = await supabase
//       .from("project_listing")
//       .update({ project_update: [...projectUpdates, newUpdate] })
//       .eq("name", projectName);

//     if (error) {
//       console.error("Error updating project with new update:", error.message);
//     }

//     setNewUpdateText(""); // Clear input after adding update
//   };

//   return (
//     <div className="flex relative flex-col sm:mt-64 mt-24 w-full">
//       {/* Render updates */}
//       {projectUpdates.map((update, index) => (
//         <div key={index} className="flex gap-5 self-center px-4 py-4 w-full font-medium rounded-2xl bg-[#DCA7FB] max-w-[1390px]">
//           <div className="flex-auto text-lg tracking-wide leading-8">{update.update}</div>
//           <div className="text-base tracking-wide leading-8">{update.date}</div>
//         </div>
//       ))}

//       {/* Add new update */}
//       <div className="flex mt-6">
//         <input
//           type="text"
//           value={newUpdateText}
//           onChange={(e) => setNewUpdateText(e.target.value)}
//           className="flex-1 px-4 py-2 mr-4 rounded-xl bg-[#DCA7FB] max-w-[1390px] placeholder-gray-600"
//           placeholder="What is the update?"
//         />
//         <button
//           onClick={handleAddUpdate}
//           className="px-4 py-2 bg-[#954AD2] text-white rounded-xl hover:bg-purple-600 focus:outline-none"
//         >
//           Add Update
//         </button>
//       </div>
//     </div>
//   );
// }
