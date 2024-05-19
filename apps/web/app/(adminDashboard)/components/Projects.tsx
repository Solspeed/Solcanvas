'use client'
import React, { useState } from 'react';
import tiny from "../../../public/images/dashboard/TinyDancer.png"
import copy from "../../../public/images/dashboard/copy.svg"

type Project = {
    id: number;
    name: string;
    description: string;
    author: string;
    idShort: string;
    category: string;
    date: string;
    imgSrc: string;
    status: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: 'Tiny Dancer',
        description: 'Solana first light client.',
        author: 'Rohan KUMAR',
        idShort: '8bxPvX42UR....',
        category: 'DePin',
        date: '24.04.24',
        imgSrc:tiny.src,
        status: 'rejected'
    },
    {
        id: 2,
        name: 'Tiny Dancer 2',
        description: 'Solana second light client.',
        author: 'Jane DOE',
        idShort: '7yxPvX42UR....',
        category: 'DeFi',
        date: '25.04.24',
        imgSrc:tiny.src,
        status: 'live'
    },
    {
        id: 3,
        name: 'Tiny Dancer 3',
        description: 'Solana second light client.',
        author: 'Jane DOE',
        idShort: '7yxPvX42UR....',
        category: 'DeFi',
        date: '25.04.24',
        imgSrc:tiny.src,
        status: 'live'
    },
    {
        id: 4,
        name: 'Tiny Dancer 4',
        description: 'Solana second light client.',
        author: 'Jane DOE',
        idShort: '7yxPvX42UR....',
        category: 'DeFi',
        date: '25.04.24',
        imgSrc:tiny.src,
        status: 'live'
    }
];

export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedProject(null);
    };

    const handleSuggestionClick = (project: Project) => {
        setSearchTerm('');
        setSelectedProject(project);
    };

    const handleFilterChange = (status: string) => {
        setFilter(status);
        setSelectedProject(null);
    };

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filter || project.status === filter)
    );

    return (
        <div className="flex flex-col font-silkscreen p-12 w-full xl:pr-[15vw] bg-black overflow-scroll">
            <div className="flex flex-col self-stretch  max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto my-auto text-3xl text-purple-300">Projects</div>
                    <div className='relative'>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search projects...."
                            className="sm:w-[360px] bg-[#151515]  font-nunito rounded-full p-4 outline-none border-none text-white"
                        />
                        {searchTerm && (
                            <div className="absolute top-12 right-0 left-0 bg-neutral-900 rounded-md shadow-lg z-10">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        onClick={() => handleSuggestionClick(project)}
                                        className="px-4 py-2 cursor-pointer hover:bg-neutral-800"
                                    >
                                        {project.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-2 self-start mt-3 text-xs whitespace-nowrap">
                    <button
                        className={`justify-center px-8 py-2 rounded-md bg-[#1C1C1C] max-md:px-5 ${filter === 'live' ? 'text-lime-500' : 'text-gray-500'}`}
                        onClick={() => handleFilterChange('live')}
                    >
                        Live
                    </button>
                    <button
                        className={`justify-center px-4 py-2 rounded-md bg-[#1C1C1C] ${filter === 'rejected' ? 'text-red-600' : 'text-gray-500'}`}
                        onClick={() => handleFilterChange('rejected')}
                    >
                        Rejected
                    </button>
                    <button
                        className={`justify-center px-3 py-2 rounded-md bg-[#1C1C1C] ${filter === 'requested' ? 'text-purple-600' : 'text-gray-500'}`}
                        onClick={() => handleFilterChange('requested')}
                    >
                        Requested
                    </button>
                </div>
                {selectedProject ? (
                    <div key={selectedProject.id} className="px-4 py-3.5 mt-6 rounded-xl bg-neutral-900 max-md:max-w-full">
                        <div className="flex sm:gap-12 gap-5 md:flex-nowrap flex-wrap max-md:gap-0">
                            <div className="flex flex-col">
                                <div className="flex grow gap-1.5 self-stretch my-auto text-sm text-red-600 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={selectedProject.imgSrc}
                                        className="shrink-0 aspect-[1.02] w-[99px]"
                                        alt={`${selectedProject.name} logo`}
                                    />
                                    <div className="flex flex-col my-auto">
                                        <div className="text-base font-medium text-white">{selectedProject.name}</div>
                                        <div className="mt-1.5 text-xs text-white text-opacity-80">{selectedProject.description}</div>
                                        <div className="mt-6">{selectedProject.author}</div>
                                        <div className="flex gap-3 mt-1.5 whitespace-nowrap">
                                            <div className="grow my-auto">{selectedProject.idShort}</div>
                                            <img
                                                loading="lazy"
                                                src={copy.src}
                                                className="shrink-0 w-3.5 aspect-square"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-5 w-full">
                                <div className="flex justify-between w-full gap-5 grow-0">
                                    <div className="flex text-white flex-col text-nowrap text-xs">
                                        <div className="px-1.5 py-2.5 rounded-md bg-neutral-950">
                                            Category: <span className="text-red-600">{selectedProject.category}</span>
                                        </div>
                                        <div className="px-1.5 mt-2 py-2.5 rounded-md bg-neutral-950">
                                            Date: <span className="text-red-600">{selectedProject.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-base whitespace-nowrap">
                                        <button className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C]  shadow-2xl">approve</button>
                                        <button className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] shadow-2xl">reject</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <div key={project.id} className="px-4 py-3.5 mt-6 rounded-xl bg-neutral-900 max-md:max-w-full">
                            <div className="flex sm:gap-12 gap-5 md:flex-nowrap flex-wrap max-md:gap-0">
                                <div className="flex flex-col">
                                    <div className="flex grow gap-1.5 self-stretch my-auto text-sm text-red-600 max-md:mt-10">
                                        <img
                                            loading="lazy"
                                            srcSet={project.imgSrc}
                                            className=" aspect-square object-cover rounded-md"
                                            alt={`${project.name} logo`}
                                        />
                                        <div className="flex flex-col my-auto">
                                            <div className="text-base font-medium text-white">{project.name}</div>
                                            <div className="mt-1.5 text-xs text-white text-opacity-80">{project.description}</div>
                                            <div className="mt-6">{project.author}</div>
                                            <div className="flex gap-3 mt-1.5 whitespace-nowrap">
                                                <div className="grow my-auto">{project.idShort}</div>
                                                <img
                                                    loading="lazy"
                                                    src={copy.src}
                                                    className="shrink-0 w-3.5 aspect-square"
                                                    alt="icon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-5 w-full">
                                    <div className="flex justify-between w-full gap-5 grow-0">
                                        <div className="flex text-white flex-col text-nowrap text-xs">
                                            <div className="px-1.5 py-2.5 rounded-md bg-neutral-950">
                                                Category: <span className="text-red-600">{project.category}</span>
                                            </div>
                                            <div className="px-1.5 mt-2 py-2.5 rounded-md bg-neutral-950">
                                                Date: <span className="text-red-600">{project.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-base whitespace-nowrap">
                                            <button className="justify-center px-6 py-4 text-lime-500 rounded-md bg-[#1C1C1C] max-md:px-5">approve</button>
                                            <button className="justify-center px-8 py-4 mt-3 text-red-600 rounded-md bg-[#1C1C1C] max-md:px-5">reject</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}