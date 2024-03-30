    "use client"
    import React, { useState, useEffect } from "react";
    import supabase from '../../supabase' // Assuming Supabase is imported from a parent component

    interface ProjectData {
    // Same structure as your FormData interface
    title: string;
    name: string;
    // ... other fields
    }

    interface EditProjectFormProps {
    projectId: string; // ID of the project to edit
    onClose: () => void; // Function to handle closing the edit form
    onSubmit: (data: ProjectData) => void; // Function to handle form submission
    }

    const EditProjectForm: React.FC<EditProjectFormProps> = ({ projectId, onClose, onSubmit }) => {
    const [projectData, setProjectData] = useState<ProjectData>({
        title: "",
        name: "",
        // ... other fields
    });

    // Fetch project data on component mount
    useEffect(() => {
        const fetchProject = async () => {
        const { data, error } = await supabase
            .from("project_listing")
            .select("*")
            .eq("id", projectId);

        if (error) {
            console.error("Error fetching project data:", error);
            // Handle error appropriately (e.g., display an error message)
        } else if (data?.length > 0) {
            setProjectData(data[0]);
        }
        };

        fetchProject();
    }, [projectId]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setProjectData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        onSubmit(projectData); // Pass updated data to parent component
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white rounded-lg shadow px-8 py-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
                {/* ... form fields for editing project details */}
                <div className="flex flex-col space-y-2">
  <label htmlFor="title">Title</label>
  <input
    type="text"
    id="title"
    name="title"
    value={projectData.title}
    onChange={handleChange}
    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
  />
  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    value={projectData.name}
    onChange={handleChange}
    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
  />
  {/* ... similar input fields for other properties of ProjectData */}
</div>


                <button type="submit" className="btn btn-primary">
                Save Changes
                </button>
            </div>
            </form>
            <button type="button" className="btn btn-secondary mt-4" onClick={onClose}>
            Cancel
            </button>
        </div>
        </div>
    );
    };

    export default EditProjectForm;
