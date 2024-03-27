import React from "react";
import Card from "./Card";
import projectsData from "../data/projectsData.json";

// Define the type for your project data
interface Project {
  imageSrc: string;
  iconSrc: string;
  title: string;
  description: string;
}

export default function Projects(): JSX.Element {
  // Split the projectsData into chunks of two
  const chunks: Project[][] = projectsData.reduce((resultArray: Project[][], item: Project, index: number) => {
    const chunkIndex: number = Math.floor(index / 2);

    // Ensure resultArray[chunkIndex] is not undefined
    if (resultArray[chunkIndex] === undefined) {
      // Use type assertion to assure TypeScript that resultArray[chunkIndex] is an array
      resultArray[chunkIndex] = [] as Project[];
    }

    // Push the item to resultArray[chunkIndex]
    resultArray[chunkIndex].push(item)

    return resultArray;
  }, []);

  return (
    <div className="flex flex-col xl:gap-16 place-items-center space-y-[4.688rem] xl:px-24 sm:px-12 px-6">
      {chunks.map((chunk: Project[], rowIndex: number) => (
        <div key={rowIndex} className="flex sm:gap-12 gap-[4.688rem] justify-between w-full sm:flex-nowrap flex-wrap">
          {chunk.map((project: Project, colIndex: number) => (
            <Card
              key={rowIndex * 2 + colIndex} // Ensure each Card has a unique key
              imageSrc={project.imageSrc}
              iconSrc={project.iconSrc}
              title={project.title}
              description={project.description}
            />
          ))}
          {/* Render empty cards if the chunk doesn't contain two items */}
          {chunk.length < 2 && (
            <div className="w-[calc(50%-4.688rem)]"></div>
          )}
        </div>
      ))}
    </div>
  );
}