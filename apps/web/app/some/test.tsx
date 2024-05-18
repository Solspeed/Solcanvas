// "use client"
// import { useState, useEffect } from 'react';

// const ProjectCountComponent = () => {
//   const [projectCount, setProjectCount] = useState(null);

//   useEffect(() => {
//     const fetchProjectCount = async () => {
//       try {
//         const response = await fetch('/api/projectCount?walletId=4enz2kR1ZsymWNojKFb4xy32AVmSnsjBa22gJzLP3xWA');
//         const data = await response.json();
//         setProjectCount(data.projectCount);
//       } catch (error) {
//         console.error('Error fetching project count:', error);
//       }
//     };

//     fetchProjectCount();
//   }, []);

//   return (
//     <div>
//       {projectCount !== null ? (
//         <p>Number of projects: {projectCount}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProjectCountComponent;
