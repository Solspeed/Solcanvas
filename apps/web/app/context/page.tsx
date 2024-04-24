// FormContext.tsx
"use client"
import React, { createContext, useContext, useState, ChangeEvent, FormEvent } from "react";

// Define the structure of the form data
interface FormData {
  name: string;
  title: string;
  description: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  githubLink: string;
  discordLink: string;
  twitterLink: string;
  websiteLink: string;
  teamMembers: TeamMember[]; // Array of team members
}

// Define the structure of a team member
interface TeamMember {
  name: string;
  image_url: string;
  twitter: string;
  github: string;
}

// Define context type
interface FormContextType {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => void;
  addTeamMember: () => void;
  removeTeamMember: (index: number) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create custom hook to use the context
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

// Create provider component
export const FormProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    description: "",
    bannerImageUrl: "",
    logoImageUrl: "",
    githubLink: "",
    discordLink: "",
    twitterLink: "",
    websiteLink: "",
    teamMembers: [{ name: "", image_url: "", twitter: "", github: "" }],
  });

  // Function to handle changes in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ): void => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const updatedTeamMembers = [...formData.teamMembers];
      if (updatedTeamMembers[index]) {
        updatedTeamMembers[index]![name as keyof TeamMember] = value;
        setFormData((prevState) => ({
          ...prevState,
          teamMembers: updatedTeamMembers,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Function to add a new team member input field
  const addTeamMember = (): void => {
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: [
        ...prevState.teamMembers,
        { name: "", image_url: "", twitter: "", github: "" },
      ],
    }));
  };

  // Function to remove a team member input field
  const removeTeamMember = (index: number): void => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: updatedTeamMembers,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    // Your handleSubmit logic goes here...
  };

  const contextValue = {
    formData,
    handleChange,
    addTeamMember,
    removeTeamMember,
    handleSubmit,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
