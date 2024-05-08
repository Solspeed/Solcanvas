import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for team member
type Member = {
  name: string;
  github: string;
  twitter: string;
  image: string | null;
};

// Define types for project update
type ProjectUpdate = {
  date: string; // Format: DD/MM/YY
  update: string;
};

// Define types for form data including team members and project updates
type FormData = {
  name: string;
  tagline: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  teamMembers: Member[];
  email: string;
  website: string;
  github: string;
  twitter: string;
  description: string;
  projectUpdates: ProjectUpdate[]; // Array of project updates
};

type FormDataContextType = {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
  addProjectUpdate: (update: ProjectUpdate) => void;
};

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

type FormDataProviderProps = {
  children: ReactNode;
};

export const FormDataProvider: React.FC<FormDataProviderProps> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    tagline: "",
    bannerImageUrl: "",
    logoImageUrl: "",
    teamMembers: [],
    email: "",
    website: "",
    github: "",
    twitter: "",
    description: "",
    projectUpdates: [], // Initialize with an empty array of project updates
  });

  const updateFormData = (newData: Partial<FormData>): void => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const addProjectUpdate = (update: ProjectUpdate): void => {
    setFormData((prevData) => ({
      ...prevData,
      projectUpdates: [...prevData.projectUpdates, update],
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, addProjectUpdate }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
