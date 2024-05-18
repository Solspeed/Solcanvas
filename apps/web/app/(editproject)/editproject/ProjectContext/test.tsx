// import { createContext, useContext, useState, ReactNode } from 'react';

// interface Project {
//   name: string;
//   tagline: string;
//   bio: string;
// }

// interface ProjectContextType {
//   projectName: string;
//   setProjectName: (name: string) => void;
//   projectData: Project | null;
//   setProjectData: (data: Project | null) => void;
// }

// const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [projectName, setProjectName] = useState<string>('');
//   const [projectData, setProjectData] = useState<Project | null>(null);

//   return (
//     <ProjectContext.Provider value={{ projectName, setProjectName, projectData, setProjectData }}>
//       {children}
//     </ProjectContext.Provider>
//   );
// };

// export const useProjectContext = (): ProjectContextType => {
//   const context = useContext(ProjectContext);
//   if (!context) {
//     throw new Error('useProjectContext must be used within a ProjectProvider');
//   }
//   return context;
// };
