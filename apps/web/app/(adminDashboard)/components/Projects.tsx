"use client";
import React, { useState, useEffect } from "react";
import copy from "../../../public/images/dashboard/copy.svg";
import supabase from "../../../supabase";

type Project = {
  id: string;
  name: string;
  tagline: string;
  author: string;
  wallet_id: string;
  category: string;
  date: string;
  created_at: string;
  logoImageUrl: string;
  status: string;
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("project_listing").select("*");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  const updateProjectStatus = async (projectId: string, status: string) => {
    try {
      const { error } = await supabase
        .from("project_listing")
        .update({ status })
        .eq("id", projectId);

      if (error) {
        console.error("Error updating project status:", error.message);
      } else {
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === projectId ? { ...project, status } : project
          )
        );
      }
    } catch (error: any) {
      console.error("Error updating project status:", error.message);
    }
  };

  const deleteProject = async (projectId: string) => {
    try {
      const { error } = await supabase
        .from("project_listing")
        .delete()
        .eq("id", projectId);

      if (error) {
        console.error("Error deleting project:", error.message);
      } else {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== projectId)
        );
      }
    } catch (error: any) {
      console.error("Error deleting project:", error.message);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedProject(null);
  };

  const handleSuggestionClick = (project: Project) => {
    setSearchTerm("");
    setSelectedProject(project);
  };

  const handleFilterChange = (status: string) => {
    setFilter(status);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filter || project.status === filter)
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateWalletId = (wallet_id: any) => {
    if (typeof wallet_id === "string" && wallet_id.length > 10) {
      return wallet_id.substring(0, 10) + "...";
    }
    return wallet_id;
  };

  return (
    <div className="flex flex-col mt-12 font-silkscreen p-6 md:p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        <div className="flex-auto my-auto text-3xl text-purple-300">
          Projects
        </div>
          <div className="relative w-full md:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search projects...."
            className="w-full sm:w-[360px] bg-[#151515] font-nunito rounded-full p-4 outline-none border-none text-white"
          />
          {searchTerm && (
            <div className="absolute top-12 right-0 left-0 bg-neutral-900 rounded-md shadow-lg z-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleSuggestionClick(project)}
                  className="px-4 py-2 cursor-pointer hover:bg-neutral-800"
                >
                  {project.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 self-start mt-3 text-xs whitespace-nowrap pb-4">
        <button
          className={`justify-center px-8 py-2 rounded-md bg-[#1C1C1C] ${
            filter === "live" ? "text-lime-500" : "text-gray-500"
          }`}
          onClick={() => handleFilterChange("live")}
        >
          Live
        </button>
        <button
          className={`justify-center px-4 py-2 rounded-md bg-[#1C1C1C] ${
            filter === "rejected" ? "text-red-600" : "text-gray-500"
          }`}
          onClick={() => handleFilterChange("rejected")}
        >
          Rejected
        </button>
        <button
          className={`justify-center px-3 py-2 rounded-md bg-[#1C1C1C] ${
            filter === "requested" ? "text-purple-600" : "text-gray-500"
          }`}
          onClick={() => handleFilterChange("requested")}
        >
          Requested
        </button>
      </div>
      <div className="overflow-y-scroll">
        {selectedProject ? (
          <div
            key={selectedProject.id}
            className="px-4 pt-3.5 mt-6 rounded-xl bg-neutral-900"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex grow gap-1.5 self-stretch my-auto text-sm text-red-600">
                  <div className="w-[120px] overflow-hidden flex justify-center items-center h-[120px]">
                    <img
                      loading="lazy"
                      src={selectedProject.logoImageUrl}
                      className="object-cover"
                      alt={`${selectedProject.name} logo`}
                    />
                  </div>
                  <div className="flex flex-col my-auto">
                    <div className="text-base font-medium text-white">
                      {selectedProject.name}
                    </div>
                    <div className="mt-1.5 text-xs text-white text-opacity-80">
                      {selectedProject.tagline}
                    </div>
                    <div className="mt-6">{selectedProject.author}</div>
                    <div className="flex gap-3 mt-1.5 whitespace-nowrap">
                      <div className="grow my-auto">
                        {truncateWalletId(selectedProject.wallet_id)}
                      </div>
                      <img
                        loading="lazy"
                        src={copy.src}
                        className="shrink-0 w-3.5 aspect-square"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-5">
                  <div className="flex flex-col text-white text-xs">
                    <div className="px-1.5 py-2.5 rounded-md bg-neutral-950">
                      Category:{" "}
                      <span className="text-red-600">
                        {selectedProject.category}
                      </span>
                    </div>
                    <div className="px-1.5 mt-2 py-2.5 rounded-md bg-neutral-950">
                      Date:{" "}
                      <span className="text-red-600">
                        {formatDate(selectedProject.created_at)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-base">
                    {selectedProject.status === "live" && (
                      <button
                        className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] shadow-2xl"
                        onClick={() => deleteProject(selectedProject.id)}
                      >
                        delete
                      </button>
                    )}
                    {selectedProject.status === "rejected" && (
                      <button
                        className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C] shadow-2xl"
                        onClick={() =>
                          updateProjectStatus(selectedProject.id, "live")
                        }
                      >
                        approve
                      </button>
                    )}
                    {selectedProject.status !== "live" &&
                      selectedProject.status !== "rejected" && (
                        <>
                          <button
                            className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C] shadow-2xl"
                            onClick={() =>
                              updateProjectStatus(selectedProject.id, "live")
                            }
                          >
                            approve
                          </button>
                          <button
                            className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] shadow-2xl"
                            onClick={() =>
                              updateProjectStatus(selectedProject.id, "rejected")
                            }
                          >
                            reject
                          </button>
                        </>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="px-4 py-3.5 mt-6 rounded-xl bg-neutral-900"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex grow gap-1.5 self-stretch my-auto text-sm text-red-600">
                    <div className="w-[120px] overflow-hidden flex justify-center items-center h-[120px]">
                      <img
                        loading="lazy"
                        src={project.logoImageUrl}
                        className="object-cover"
                        alt={`${project.name} logo`}
                      />
                    </div>
                    <div className="flex flex-col my-auto">
                      <div className="text-base font-medium text-white">
                        {project.name}
                      </div>
                      <div className="mt-1.5 text-xs text-white text-opacity-80">
                        {project.tagline}
                      </div>
                      <div className="mt-6">{project.author}</div>
                      <div className="flex gap-3 mt-1.5 whitespace-nowrap">
                        <div className="grow my-auto">
                          {truncateWalletId(project.wallet_id)}
                        </div>
                        <img
                          loading="lazy"
                          src={copy.src}
                          className="shrink-0 w-3.5 aspect-square"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between w-full gap-5">
                    <div className="flex flex-col text-white text-xs">
                      <div className="px-1.5 py-2.5 rounded-md bg-neutral-950">
                        Category:{" "}
                        <span className="text-red-600">{project.category}</span>
                      </div>
                      <div className="px-1.5 mt-2 py-2.5 rounded-md bg-neutral-950">
                        Date:{" "}
                        <span className="text-red-600">
                          {formatDate(project.created_at)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      {project.status === "live" && (
                        <button
                          className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] shadow-2xl"
                          onClick={() => deleteProject(project.id)}
                        >
                          delete
                        </button>
                      )}
                      {project.status === "rejected" && (
                        <button
                          className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C] shadow-2xl"
                          onClick={() =>
                            updateProjectStatus(project.id, "live")
                          }
                        >
                          approve
                        </button>
                      )}
                      {project.status !== "live" &&
                        project.status !== "rejected" && (
                          <>
                            <button
                              className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C] shadow-2xl"
                              onClick={() =>
                                updateProjectStatus(project.id, "live")
                              }
                            >
                              approve
                            </button>
                            <button
                              className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] shadow-2xl"
                              onClick={() =>
                                updateProjectStatus(project.id, "rejected")
                              }
                            >
                              reject
                            </button>
                          </>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
