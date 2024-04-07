'use client'
import CustomButton from "../../../components/button/CustomButton";
import Link from "next/link";
import Overview from "./components/Overview";
import { useState, useEffect } from "react";
import supabase from "../../../supabase";
import back from "../../../public/images/marketplace/projects/Left_Arrow_Alt.png"
import Image from "next/image";

interface ProjectDetailsProps {
    params: { projectName: string };
}

interface Project {
    name: string;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const [loading, setLoading] = useState(true);
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
            console.log(allProjects)
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
            <div className="w-screen h-screen bg-black flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <div className="flex flex-col xl:px-14 sm:px-10 px-4 xl:pt-16 sm:pt-12 pt-6 h-full bg-black min-h-screen">
            <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
                <Link href="/marketplace" className="flex items-center gap-2 m-2">
                    <Image src={back} alt="back" className="" />
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
