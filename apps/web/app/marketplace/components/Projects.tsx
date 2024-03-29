import React from "react";
import Card from "./Card";
import projectsData from "../data/projectsData.json";

interface Project {
  imageSrc: string;
  iconSrc: string;
  title: string;
  description: string;
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
  // Split the projectsData into chunks of two
  const chunks: Project[][] = splitIntoChunks(projectsData, 2);

  return (
    <div className="flex flex-col xl:gap-16 place-items-center space-y-[4.688rem] xl:px-24 sm:px-12 px-6">
      {chunks.map((chunk: Project[], rowIndex: number) => (
        <div key={rowIndex} className="flex sm:gap-12 gap-[4.688rem] justify-between w-full sm:flex-nowrap flex-wrap">
          {chunk.map((project: Project, colIndex: number) => (
            <Card
              key={`${rowIndex}_${colIndex}`}
              imageSrc={project.imageSrc}
              iconSrc={project.iconSrc}
              title={project.title}
              description={project.description}
            />
          ))}
          {chunk.length < 2 && (
            <div className="w-[calc(50%-4.688rem)]"></div>
          )}
        </div>
      ))}
    </div>
  );
}