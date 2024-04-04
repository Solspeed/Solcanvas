'use client'
import CustomButton from "../../../components/button/CustomButton";
import Link from "next/link";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Commits from "./components/Commits";
import Updates from "./components/Updates";
import Tweets from "./components/Tweets";
import { useState, useEffect } from "react";
import supabase from "../../../supabase";

interface ProjectDetailsProps {
    params: { projectName: string };
}

interface Project {
    name: string;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const [projectData, setProjectData] = useState<{
        projectList: Project[];
        teamMemberList: any[];
    }>({
        projectList: [],
        teamMemberList: [],
    });

    useEffect(() => {
        fetchProjectData();
    }, []);

    const fetchProjectData = async () => {
        try {
            const { data: allProjects, error: projectError } = await supabase
                .from('project_listing')
                .select('*');
            const { data: teamMembers, error: teamMemberError } = await supabase
                .from('team_members')
                .select('*');

            if (projectError) {
                throw projectError;
            }

            if (teamMemberError) {
                throw teamMemberError;
            }

            const filteredProjects = allProjects.filter((project: Project) => {
                if (project.name) {
                    return project.name.toLowerCase() === params.projectName.toLowerCase();
                }
                return false;
            });

            setProjectData({
                projectList: filteredProjects || [],
                teamMemberList: teamMembers || [],
            });
        } catch (error: any) {
            console.error('Error fetching project data:', error.message);
        }
    };

    return (
        <div className="flex flex-col xl:px-14 sm:px-10 px-4 xl:py-16 sm:py-12 py-6 h-full bg-black">
            <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
                <Link href="/marketplace" className="text-white text-opacity-60 text-lg font-semibold">
                    get back to marketplace
                </Link>
                <Overview projectsList={projectData.projectList} />
                <div className="flex flex-col items-center px-6 w-full font-medium leading-8">
                    <CustomButton
                        text="Edit Project"
                        property1="variant-2"
                        className="flex sm:scale-[1] scale-[0.8] hover:cursor-pointer justify-center items-center text-center px-16 py-10 sm:mt-80 mt-36 max-w-full tracking-wider leading-8 bg-black rounded-2xl text-zinc-400 w-[972px]"
                    />
                    <div className="sm:mt-80 mt-36 sm:text-xl text-lg text-center text-white text-opacity-60">
                        All right reserved @solcanvas
                    </div>
                </div>
            </div>
        </div>
    );
}