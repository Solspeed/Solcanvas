// "use client"
// import React from "react";

// interface TeamMemberFormProps {
//   index: number;
//   teamMember: TeamMember;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
//   handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
//   removeTeamMember: (index: number) => void;
// }

// const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
//   index,
//   teamMember,
//   handleChange,
//   handleImageChange,
//   removeTeamMember,
// }) => {
//   return (
//     <div key={index} className="flex flex-col space-y-4">
//       <div className="flex items-center space-x-4">
//         <label className="leading-loose">Team Member {index + 1}</label>
//         <button
//           type="button"
//           className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
//           onClick={() => removeTeamMember(index)}
//         >
//           Remove
//         </button>
//       </div>
//       <input
//         type="text"
//         name="name"
//         value={teamMember.name}
//         onChange={(e) => handleChange(e, index)}
//         placeholder="Name"
//         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//       />
//       <input
//         type="file"
//         name="image_url"
//         onChange={(e) => handleImageChange(e, index)}
//         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//       />
//       <input
//         type="text"
//         name="twitter"
//         value={teamMember.twitter}
//         onChange={(e) => handleChange(e, index)}
//         placeholder="Twitter Link"
//         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//       />
//       <input
//         type="text"
//         name="github"
//         value={teamMember.github}
//         onChange={(e) => handleChange(e, index)}
//         placeholder="GitHub Link"
//         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//       />
//     </div>
//   );
// };

// export default TeamMemberForm;
