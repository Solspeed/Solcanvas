"use client";

import { useState } from "react";
import { useFormData } from "../../../(addproject)/addproject/context/FormDataContext";
import supabase from "../../../../supabase";

export default function Updates() {
  const [showAllUpdates, setShowAllUpdates] = useState(false);
  const { formData, addProjectUpdate } = useFormData();
  const [newUpdateText, setNewUpdateText] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSeeAllUpdatesClick = () => {
    setShowAllUpdates(!showAllUpdates);
  };

  const handleAddUpdate = async () => {
    if (!newUpdateText.trim()) return;

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("en-us", { month: "short" })} ${currentDate.getFullYear() % 100}`;

    const newUpdate = {
      date: formattedDate,
      update: newUpdateText,
    };

    // Add new update at the beginning of the array to show it at the top
    addProjectUpdate(newUpdate); // passing true to add at the beginning

    setShowInput(false);

    const currentUrl = window.location.href;
    const projectName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

    const { data: projects, error } = await supabase
      .from("project_listing")
      .select("id, project_update")
      .eq("name", projectName);
      
    if (error) {
      console.error("Error fetching project:", error.message);
      return;
    }

    if (projects.length === 0) {
      console.error("Project not found.");
      return;
    }

    const projectId = projects[0]?.id;
    const currentUpdates = projects[0]?.project_update || [];

    const updatedProject = {
      ...(projects[0] || {}),
      project_update: [...currentUpdates, newUpdate],
    };

    const { data: updatedData, error: updateError } = await supabase
      .from("project_listing")
      .update(updatedProject)
      .match({ id: projectId });

    if (updateError) {
      console.error("Error updating project:", updateError.message);
      return;
    }

    console.log("Project updated successfully:", updatedData);

    setNewUpdateText("");
  };

  return (
    <div className={`flex relative flex-col sm:mt-64 mt-24 w-full`}>
      <div className="mx-2.5 font-silkscreen  mq450:text-2xl text-nowrap text-center text-[#954AD2] md:text-[60px] sm:mb-16 mb-6 text-4xl tracking-tighter font-medium sm:tracking-wider leading-8">
        Product Updates
      </div>
      <button
        onClick={() => setShowInput(!showInput)}
        className={`sm:w-44 w-24 self-end sm:mt-4 bg-[#954AD2] ${showInput ? 'blur-xl' : ''} sm:text-lg text-sm text-white font-medium sm:py-2  py-1 rounded-xl hover:bg-purple-600 focus:outline-none`}
      >
        Add Project
      </button>
      {showInput && (
        <div className="flex-col inset-0 absolute top-1/2   bg-opacity-10 justify-center items-center z-50">
          <div className="flex flex-col">
            <input
              type="text"
              value={newUpdateText}
              onChange={(e) => setNewUpdateText(e.target.value)}
              className="flex scale-[0.8] gap-5 placeholder:text-gray-600  sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 lg:placeholder:text-3xl sm:placeholder:text-xl placeholder:text-lg self-center plac lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4  w-full font-medium rounded-2xl bg-[#DCA7FB] max-w-[1390px] flex-wrap"
              placeholder="What is the update?"
            />
            <button
              onClick={handleAddUpdate}
              className="sm:w-44 w-24 self-center mt-4 bg-[#954AD2] sm:text-lg text-sm text-white font-medium sm:py-2 py-1 rounded-xl hover:bg-purple-600 focus:outline-none"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {formData.projectUpdates.slice(0, showAllUpdates ? formData.projectUpdates.length : 3).reverse().map((update, index) => ( // Reverse the array
        <div key={index} className={`flex  ${showInput ? 'blur-xl' : ''} scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium rounded-2xl bg-[#DCA7FB] max-w-[1390px] flex-wrap`}>
          <div className="flex-auto sm:text-2xl text-lg lg:text-3xl tracking-wide leading-8 max-md:max-w-full">
            {update.update}
          </div>
          <div className="lg:text-2xl sm:text-xl text-base tracking-wide leading-8">
            {update.date}
          </div>
        </div>
      ))}
      {formData.projectUpdates.length > 3 && (
        <button
          onClick={handleSeeAllUpdatesClick}
          className="self-center sm:mt-12 mt-6 sm:text-3xl text-xl font-medium tracking-wide leading-8 text-zinc-400 max-md:mt-10"
        >
          {showAllUpdates ? "View less" : "View all"}
        </button>
      )}
    </div>
  );
}