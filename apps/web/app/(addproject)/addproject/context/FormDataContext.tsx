
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for team member
type Member = {
  name: string;
  github: string;
  twitter: string;
  image: string | null;
};

// Define types for form data including team members
type FormData = {
  name: string;
  tagline: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  teamMembers: Member[];
  // Add more fields as needed
  email: string;
  website: string;
  github: string;
  twitter: string;
  description: string;
};

// Define context type
type FormDataContextType = {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
};

// Create a new context for form data
const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

// Custom hook to access the form data context
export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

// Form Data Provider component
type FormDataProviderProps = {
  children: ReactNode;
};

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    tagline: '',
    bannerImageUrl: '',
    logoImageUrl: '',
    teamMembers: [], // Initialize with an empty array
    email: '',
    website: '',
    github: '',
    twitter: '',
    // Initialize other form fields here
    description: '',
  });

  const updateFormData = (newData: Partial<FormData>): void => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
