"use client"
import { useState, useEffect } from "react";
import { useProjectContext } from "../../(editproject)/editproject/contextname/namecontext";
import supabase from "../../../supabase";
import CustomButton from "../../../components/button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import Overview from "./components/Overview";
import Team from "./components/Team";

import Commits from "./components/Commits";
import Footer from "../components/Footer";
import Tweets from "./components/Tweets";
import Updates from "./components/Updates";
import back from "../../../public/images/marketplace/projects/Left_Arrow_Alt.png"
interface ProjectDetailsProps {
  params: { projectName: string };
}

interface Project {
  name: string;
  teamMembers: [];
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const { setProjectName } = useProjectContext();
  const [loading, setLoading] = useState(true);
  
  const [projectData, setProjectData] = useState<{
    projectList: Project[];
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

  const handleEditProjectClick = () => {
    // Set the project name in the context when button is clicked
    setProjectName(params.projectName);
  };
console.log(params.projectName)
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
        {projectData.projectList[0]?.teamMembers && (
          <Team teamMembers={projectData.projectList[0].teamMembers} />
        )}
        {/* <Tweets /> */}
        <Updates />
        <Commits />
        <Link href={`/marketplace/${params.projectName}/editform/`} className="flex w-full justify-center ">
        {/* <button onClick={handleEditProjectClick}>
          <CustomButton
            text="Edit Project"
            property1="variant-2"
            className="flex sm:scale-[1] scale-[0.8] hover:cursor-pointer justify-center items-center text-center px-16 py-10 sm:mt-80 mt-36 max-w-full tracking-wider leading-8 bg-black rounded-2xl text-zinc-400 w-[972px]"
          />
        </button> */}
        </Link>
        <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start sm:pt-[5.81rem] pt-[5.6rem] px-[0rem] pb-[0rem] box-border gap-[14.19rem] tracking-[normal] mq450:gap-[8rem] mq1000:gap-[14.19rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
