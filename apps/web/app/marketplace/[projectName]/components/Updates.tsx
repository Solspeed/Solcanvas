"use client";
import { useState } from "react";
import { useFormData } from "../../../(addproject)/addproject/context/FormDataContext";
import supabase from "../../../../supabase";

export default function Updates() {
  const [showAllUpdates, setShowAllUpdates] = useState(false);
  const { formData, addProjectUpdate } = useFormData();
  const [newUpdateText, setNewUpdateText] = useState("");

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

    addProjectUpdate(newUpdate);

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
    <div className="flex flex-col sm:mt-64 mt-24 w-full">
      <div className="mx-2.5 font-silkscreen text-center text-[#954AD2] sm:text-[60px] mb-16 text-4xl tracking-tighter font-medium sm:tracking-wider leading-8">
        Product Updates
      </div>
      <input
        type="text"
        value={newUpdateText}
        onChange={(e) => setNewUpdateText(e.target.value)}
        className="w-fit bg-transparent text-white placeholder-gray-400 focus:outline-none"
        placeholder="Add update"
      />
      <button
        onClick={handleAddUpdate}
        className="w-full mt-4 bg-zinc-400 text-lg text-white font-medium py-2 rounded-xl hover:bg-zinc-500 focus:outline-none"
      >
        Add
      </button>
      {formData.projectUpdates.slice(0, showAllUpdates ? formData.projectUpdates.length : 3).map((update, index) => (
        <div key={index} className="flex scale-[0.8] gap-5 self-center lg:px-10 sm:px-6 px-4 lg:py-11 sm:py-8 py-4 sm:mt-11 mt-6 w-full font-medium rounded-2xl bg-[#DCA7FB] max-w-[1390px] flex-wrap">
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