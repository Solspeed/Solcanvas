'use client'
import CustomButton from "../../../components/button/CustomButton";
import Link from "next/link";
import Overview from "./components/Overview";
import Team from "./components/Team"; // Import Team component
import { useState, useEffect } from "react";
import supabase from "../../../supabase";
import Image from "next/image";
import Updates from "./components/Updates";
import Commits from "./components/Commits";
import Footer from "../components/Footer"
import Tweets from "./components/Tweets";

interface ProjectDetailsProps {
    params: { projectName: string };
}

interface Project {
    name: string;
    teamMembers: [];
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const [loading, setLoading] = useState(true);
    const [projectData, setProjectData] = useState<{
        projectList: Project[]
    }>({
        projectList: []
    });

    useEffect(() => {
        fetchProjectData();
    }, []);

    const fetchProjectData = async () => {
        try {
            const { data: allProjects, error: projectError } = await supabase
                .from('project_listing')
                .select('*');


            if (projectError) {
                throw projectError;
            }
            console.log(allProjects);
            const filteredProjects = allProjects.filter((project: Project) => {
                if (project.name) {
                    return project.name.toLowerCase() === params.projectName.toLowerCase();
                }
                return false;
            });

            setProjectData({
                projectList: filteredProjects || []

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
        <div className="flex font-nunito flex-col xl:px-14 sm:px-10 px-4 xl:pt-16 sm:pt-12 pt-6 h-full bg-black min-h-screen">
            <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full sm:space-y-56 space-y-7">
                <Overview projectsList={projectData.projectList} />
                {/* Pass teamMembers to Team component */}
                {projectData.projectList[0]?.teamMembers && <Team teamMembers={projectData.projectList[0].teamMembers} />}
                <Tweets />
                <Updates />
                <Commits />
                <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start sm:pt-[5.81rem] pt-[5.6rem] px-[0rem] pb-[0rem] box-border gap-[14.19rem] tracking-[normal] mq450:gap-[8rem] mq1000:gap-[14.19rem]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
