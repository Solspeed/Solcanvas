import React, { useState, useEffect } from "react";
import Card from "./Card";
import supabase from "../../../supabase";
import dropdown from "../../../public/images/dashboard/dropdown.svg"

interface Project {
  id: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  name: string;
  tagline: string;
  category: string;
}

const categories = [
 'Cex', 'DeFi', 'Developer Tool', 'Digital Collectibles', 'Art',
  'Dao', 'Depin', 'Explorer', 'Gaming', 'Infrastructure', 'Mobile', 'Oracle',
  'Payments', 'Privacy', 'Social Protocol', 'Stable Coin', 'Wallet', 'Others'
];

const mainCategories = ['All Projects', 'NFT', 'Wallet', 'Exchange', 'DeFi'];

function splitIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk: T[] = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}

export default function Projects({ selectedProject }: { selectedProject: Project | null }): JSX.Element {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  useEffect(() => {
    if (!selectedProject) {
      fetchProjectData();
    } else {
      setIsLoading(false);
    }
  }, [selectedProject]);

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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCategory('More')
    setSelectedCategory(selectedValue);
    setTimeout(() => {
      setSelectedCategory(selectedValue);
    }, 10);
  };


  const filteredProjects = selectedCategory === 'All Projects' ? projectData : projectData.filter(project => project.category === selectedCategory);

  const chunks: Project[][] = splitIntoChunks(filteredProjects, 2);

  return (
    <>
      <div className="flex w-[80vw] my-16 ml-12 font-nunito justify-between px-4 md:px-20 gap-5 pt-20 text-base tracking-normal leading-8 text-white text-opacity-70">
        {mainCategories.map((category) => (
          <div
            key={category}
            className={`flex flex-col justify-center cursor-pointer whitespace-nowrap`}
            onClick={() => setSelectedCategory(category)}
          >
            <div
              className={`justify-center px-4 py-2.5 rounded-xl transition-all duration-100 ease-in hover:bg-white hover:bg-opacity-5 hover:text-opacity-100 hover:font-semibold hover:text-lg ${selectedCategory === category
                ? "bg-white bg-opacity-10 text-opacity-100 font-semibold text-lg"
                : "bg-black"
                }`}
            >
              {category}
            </div>
          </div>
        ))}
        <div className="  flex flex-col justify-center whitespace-nowrap">
          <div className="relative justify-center px-6 py-3 rounded-xl cursor-pointer max-md:px-5 hover:shadow-md">
            <div className="flex items-center gap-5 justify-between">
              <div
                className={`justify-center cursor-pointer px-4 py-2.5 rounded-xl transition-all duration-100 ease-in hover:bg-white hover:bg-opacity-5 hover:text-opacity-100 hover:font-semibold hover:text-lg ${selectedCategory === 'More'
                  ? "bg-white bg-opacity-10 text-opacity-100 font-semibold text-lg"
                  : "bg-black"
                  }`}
              >
                More
              </div>
              <img
                loading="lazy"
                src={dropdown.src}
                className="shrink-0 aspect-[1.3] w-[13px]"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="absolute top-0 left-0 sm:w-64 w-44 h-16 bg-black rounded-xl overflow-hidden opacity-0 cursor-pointer"
              style={{ zIndex: 10 }}
            >
              {categories.filter((category) => !mainCategories.includes(category)).map(
                (category) => (
                  <option key={category} className="rounded-xl" value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
          </div>

        </div>
      </div>

      <div className="flex flex-col xl:gap-16 place-items-center space-y-[2.88rem] xl:px-24 sm:px-12 px-4">
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          selectedProject ? (
            <Card
              imageSrc={selectedProject.bannerImageUrl}
              iconSrc={selectedProject.logoImageUrl}
              title={selectedProject.name}
              description={selectedProject.tagline}
              url={selectedProject.name}
            />
          ) : (
            filteredProjects.length === 0 ? (
              <div className="text-center text-white text-opacity-70 mt-10">
                <p className="text-2xl font-bold">No projects found</p>
                <p className="mt-4">Please select a different category or check back later.</p>
              </div>
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
            )
          )
        )}
      </div>
    </>
  );
}