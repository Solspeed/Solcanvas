"use client";
import React from "react";
import { useState, useEffect } from "react";
import projectImage from "../../../public/images/dashboard/TinyDancer.png";
import upload from "../../../public/images/dashboard/cloud.svg";
import copyIcon from "../../../public/images/dashboard/copy.svg";
import supabase from "../../../supabase";

interface ProjectProps {
    imageUrl: string;
    title: string;
    description: string;
    views?: number;
    commits?: number;
    liveLink?: string;
    status?: "live" | "review" | "rejected";
}

const projects: ProjectProps[] = [
    {
        imageUrl: projectImage.src,
        title: "Tiny Dancer",
        description: "Solana first light client.",
        views: 350,
        commits: 35,
        liveLink: "Link",
        status: "live",
    },
    {
        imageUrl: projectImage.src,
        title: "Tiny Dancer",
        description: "Solana first light client.",
        status: "review",
    },
    {
        imageUrl: projectImage.src,
        title: "Tiny Dancer",
        description: "Solana first light client.",
        status: "rejected",
    },
];

const ProjectCard: React.FC<ProjectProps> = ({
    imageUrl,
    title,
    description,
    views,
    commits,
    liveLink,
    status,
}) => {
    let statusText = "";
    let statusClass = "";

    switch (status) {
        case "live":
            statusText = `Live on "${liveLink}"`;
            statusClass = "text-purple-300";
            break;
        case "review":
            statusText =
                "Your project is under review, you will get notified when your project is live. Can take upto 72 hours.";
            statusClass = "text-purple-600";
            break;
        case "rejected":
            statusText = (
                <>
                    Rejected , for further help mail on{" "}
                    <span className="text-purple-300">solcanvas2024@gmail.com</span>
                </>
            ).toString();
            statusClass = "text-purple-300";
            break;
    }

    return (
        <div className="flex flex-col grow pt-4 w-full rounded-xl bg-neutral-900">
            {status === "live" && (
                <div className="flex flex-1 justify-between gap-5 w-full ">
                    <div className="flex gap-2 self-start ">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="shrink-0 aspect-[1.02] w-[99px] -mb-4 ml-4"
                        />
                        <div className="flex flex-col my-auto">
                            <div className="text-base font-medium text-white">{title}</div>
                            <div className="mt-1.5 text-xs text-white text-opacity-80">
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="flex  font-silkscreen  gap-5 mt-auto sm:mr-6">
                        <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
                            <div className="text-xs text-white">Views</div>
                            <div className="mt-3 text-xl font-bold text-purple-300">
                                {views}
                            </div>
                        </div>
                        <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
                            <div className="text-xs text-white">Commits</div>
                            <div className="mt-3 text-xl font-bold text-purple-300">
                                {commits}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {status !== "live" && (
                <div className="flex gap-2 self-start ">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="shrink-0 aspect-[1.02] w-[99px] -mb-4 ml-4"
                    />
                    <div className="flex flex-col my-auto">
                        <div className="text-base font-medium text-white">{title}</div>
                        <div className="mt-1.5 text-xs text-white text-opacity-80">
                            {description}
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`justify-center text-center items-center px-16 py-4 text-xs tracking-wider rounded-none  bg-black bg-opacity-90 max-md:px-5 max-md:max-w-full ${statusClass}`}
            >
                {statusText}
            </div>
        </div>
    );
};

const ProjectList: React.FC = () => {
    return (
        <div className="flex flex-col grow mt-5 max-md:mt-10 max-md:max-w-full">
            {projects.map((project, index) => (
                <div key={index} className={index > 0 ? "mt-5" : ""}>
                    <ProjectCard {...project} />
                </div>
            ))}
            <div className="self-center mt-5 text-xs text-white text-opacity-50">
                View More
            </div>
        </div>
    );
};

const StatCard: React.FC<{ label: string; value: string | number }> = ({
    label,
    value,
}) => {
    return (
        <div className="flex flex-col items-start py-4  pl-3 rounded-xl bg-neutral-900">
            <div className="text-sm text-white">{label}</div>
            <div
                className={`mt-11 xl:text-4xl md:text-3xl text-xl font-bold ${label === "Your Rewards" ? "text-orange-600" : "text-purple-600"
                    }`}
            >
                {value}
            </div>
        </div>
    );
};
const Main: React.FC = () => {
    const [totalProjects, setTotalProjects] = useState<number>(0);
    const [totalUser, setTotalUser] = useState<number>(0);
    console.log(totalProjects);
    useEffect(() => {
        const fetchProjectCount = async () => {
            try {
                const { count, error } = await supabase
                    .from("project_listing")
                    .select("*", { count: "exact", head: true })
                    .eq("status", "live");

                if (error) {
                    console.error("Error fetching project count:", error.message);
                } else {
                    setTotalProjects(count || 0);
                }
            } catch (error: any) {
                console.error("Error fetching project count:", error.message);
            }
        };


        fetchProjectCount();
    }, []);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const { count, error } = await supabase
                    .from("onboarding")
                    .select("*", { count: "exact", head: true });

                if (error) {
                    console.error("Error fetching project count:", error.message);
                } else {
                    setTotalUser(count || 0);
                }
            } catch (error: any) {
                console.error("Error fetching project count:", error.message);
            }
        };


        fetchUserCount();
    }, []);


    return (
        <div className="flex flex-col font-silkscreen p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
            <main className="flex flex-col ml-5 max-md:ml-0 w-full">
                <section className="flex flex-col self-stretch max-w-full">
                    <h1 className="text-3xl text-purple-300 max-w-ful font-silkscreen uppercase">
                        Gm, Admin
                    </h1>
                    <div className="mt-16 flex flex-col h-full max-md:mt-10 max-w-full">
                        <div className="flex gap-5 flex-col max-md:gap-0">
                            <div className="flex flex-col max-md:ml-0 max-md:w-full">
                                <div className="max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex-col bg-stone-950 flex items-center p-7 py-8 rounded-full justify-center">
                                            <img src={upload.src} alt="User avatar" />
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <div className="flex gap-2.5 self-stretch p-3 my-auto w-full text-sm text-red-600 whitespace-nowrap rounded-md bg-stone-950 max-md:flex-wrap max-md:mt-10">
                                                <div className="flex-auto max-md:max-w-full">
                                                    8bxPvX42URZKixUTFLywQEq6ZYef4nQfU3QvyMkmzuXs
                                                </div>
                                                <img
                                                    src={copyIcon.src}
                                                    alt="Copy icon"
                                                    className="shrink-0 w-3.5 aspect-square"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-12 gap-5 text-nowrap my-12">
                            <div className="sm:ml-5 ml-0 xl:flex-1">
                                <StatCard label="Total Users" value={totalUser} />
                            </div>
                            <div className="sm:ml-5 ml-0 xl:flex-1">
                                <StatCard label="Total Project Listed" value={totalProjects} />
                            </div>
                            <div className="sm:ml-5 ml-0 xl:flex-1">
                                <StatCard label="Views" value={35000} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Main;
