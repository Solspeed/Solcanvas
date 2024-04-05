'use client'
import CustomButton from "../../../components/button/CustomButton";
import Link from "next/link";
import Overview from "./components/Overview";
import { useState, useEffect } from "react";
import supabase from "../../../supabase";

interface ProjectDetailsProps {
    params: { projectName: string };
}

interface Project {
    name: string;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const [loading, setLoading] = useState(true); // State to track loading status
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
            setLoading(false); 
        } catch (error: any) {
            console.error('Error fetching project data:', error.message);
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-black">
            <svg className="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                        <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                        <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                    </linearGradient>
                    <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                        <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                    </linearGradient>
                </defs>
                <circle className="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
                <line className="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
            </svg>
        </div>
        );
    }

    return (
        <div className="flex flex-col xl:px-14 sm:px-10 px-4 xl:pt-16 sm:pt-12 pt-6 h-full bg-black min-h-screen">
            <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
                <Link href="/marketplace" className="text-white text-opacity-60 text-lg font-semibold">
                    get back to marketplace
                </Link>
                <Overview projectsList={projectData.projectList} />
                <Link href={`/marketplace/${params.projectName}/editform`} className="flex w-full justify-center ">
                    <CustomButton
                        text="Edit Project"
                        property1="variant-2"
                        className="flex sm:scale-[1] scale-[0.8] hover:cursor-pointer justify-center items-center text-center px-16 py-10 sm:mt-80 mt-36 max-w-full tracking-wider leading-8 bg-black rounded-2xl text-zinc-400 w-[972px]"
                    />
                </Link>
                <div className="sm:mt-80 mt-36 pb-4 sm:text-xl text-lg text-center text-white text-opacity-60">
                    All right reserved @solcanvas
                </div>
            </div>
        </div>
    );
}
