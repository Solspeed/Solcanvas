'use client'
import React, { useState, useEffect } from "react";
import Card from "./Card";
import supabase from "../../../supabase";

interface Project {
  bannerImageUrl: string;
  logoImageUrl: string;
  name: string;
  tagline: string;
}

function splitIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk: T[] = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}

export default function Projects(): JSX.Element {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      setIsLoading(true);
      const { data: allProjects, error: projectError } = await supabase
        .from('project_listing')
        .select('*')
        .eq("status", "live");

      if (projectError) {
        throw projectError;
      }

      setProjectData(allProjects || []);
    } catch (error: any) {
      console.error('Error fetching project data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Split the projectData into chunks of two
  const chunks: Project[][] = splitIntoChunks(projectData, 2);

  return (
    <div className="flex flex-col xl:gap-16 place-items-center space-y-[2.88rem] xl:px-24 sm:px-12 px-4">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        chunks.map((chunk: Project[], rowIndex: number) => (
          <div key={rowIndex} className="flex sm:gap-12 gap-[2.88rem] justify-between w-full md:flex-nowrap flex-wrap">
            {chunk.map((project: Project, colIndex: number) => (
              <Card
                key={`${rowIndex}_${colIndex}`}
                imageSrc={project.bannerImageUrl}
                iconSrc={project.logoImageUrl}
                title={project.name}
                description={project.tagline}
                url={project.name}
              />
            ))}
            {chunk.length < 2 && (
              <div key={`empty_${rowIndex}`} className="w-[calc(50%-4.688rem)]"></div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

