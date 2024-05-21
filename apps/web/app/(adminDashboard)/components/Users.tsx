'use client'
import React, { useState } from 'react';
import copy from "../../../public/images/dashboard/copy.svg"
import avatar from "../../../public/images/dashboard/avatar.png"

interface User {
    id: number;
    name: string;
    title: string;
    projects: number;
    commits: number;
    address: string;
    rewards: number;
    profileImgSrc: string;
    profileImgAlt: string;
}

interface ProfileProps {
    name: string;
    title: string;
    projects: number;
    commits: number;
    address: string;
    rewards: number;
    profileImgSrc: string;
    profileImgAlt: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
    name,
    title,
    projects,
    commits,
    address,
    rewards,
    profileImgSrc,
    profileImgAlt,
}) => {
    return (
        <section className="grow px-4 py-4 w-full rounded-xl bg-neutral-900 max-md:mt-6 max-w-full">
            <div className="flex">
                <figure className="flex flex-row">
                    <img
                        loading="lazy"
                        src={profileImgSrc}
                        alt={profileImgAlt}
                        className="grow object-cover max-md:mt-6"
                    />
                </figure>
                <div className="flex flex-col ml-2 w-9/12">
                    <div className="flex flex-col max-md:mt-6">
                        <div className="flex gap-5 px-px">
                            <div className="flex flex-col flex-1 mt-2">
                                <h1 className="text-base font-medium font-nunito text-white">{name}</h1>
                                <p className="mt-2.5 font-nunito text-xs text-white text-opacity-80">{title}</p>
                                <div className="self-start justify-self-end mt-auto flex px-2 w-fit py-1.5 text-sm text-[#954AD2] rounded-md bg-neutral-950">
                                    <span className="sm:text-sm text-xs">{address}</span>
                                    <img
                                        loading="lazy"
                                        src={copy.src}
                                        alt="Copy address"
                                        className="shrink-0 self-center w-3.5 aspect-square"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col text-xs text-white">
                                <div className="justify-center px-1 text-nowrap py-2.5 rounded-md bg-neutral-950">
                                    Projects: <span className="text-purple-600">{projects}</span>
                                </div>
                                <div className="justify-center px-1 text-nowrap py-2.5 mt-2 rounded-md bg-neutral-950">
                                    Commits: <span className="text-purple-600">{commits}</span>
                                </div>
                                <div className="justify-center px-1 text-nowrap py-2.5 mt-2 rounded-md bg-neutral-950">
                                    Rewards: <span className="text-purple-600">{rewards}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const users: User[] = [
    {
        id: 1,
        name: 'Drac',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 2,
        name: 'Drac 1',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 3,
        name: 'Drac 2',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 4,
        name: 'Drac 3',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 5,
        name: 'Drac 4',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 6,
        name: 'Drac 5',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 7,
        name: 'Drac 6',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 8,
        name: 'Drac 7',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 9,
        name: 'Drac 8',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 10,
        name: 'Drac 9',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 11,
        name: 'Drac 10',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 12,
        name: 'Drac 11',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
    {
        id: 13,
        name: 'Drac 12',
        title: 'Chef @solcanvas',
        projects: 24,
        commits: 56,
        address: '8bxPvX4....',
        rewards: 23,
        profileImgSrc: avatar.src,
        profileImgAlt: 'Profile image of Drac',
    },
];

export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedUser(null);
    };

    const handleSuggestionClick = (user: User) => {
        setSelectedUser(user);
        setSearchTerm('');
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col font-silkscreen p-12 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto  text-3xl text-purple-300">Users</div>
                <div className='relative'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search users...."
                        className="sm:w-[360px] bg-[#151515] font-nunito rounded-full p-4 outline-none border-none text-white"
                    />
                    {searchTerm && (
                        <div className="absolute top-12 right-0 left-0 text-white text-opacity-70 bg-neutral-900 rounded-md shadow-lg z-10">
                            {filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    onClick={() => handleSuggestionClick(user)}
                                    className="px-4 py-2 cursor-pointer hover:bg-neutral-800"
                                >
                                    {user.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-12 flex-1 overflow-y-auto scroll-smooth">
                <div className="grid lg:grid-cols-2 gap-10 mt-4">
                    {selectedUser ? (
                        <ProfileCard
                            key={selectedUser.id}
                            name={selectedUser.name}
                            title={selectedUser.title}
                            projects={selectedUser.projects}
                            commits={selectedUser.commits}
                            address={selectedUser.address}
                            rewards={selectedUser.rewards}
                            profileImgSrc={selectedUser.profileImgSrc}
                            profileImgAlt={selectedUser.profileImgAlt}
                        />
                    ) : (
                        filteredUsers.map((user) => (
                            <ProfileCard
                                key={user.id}
                                name={user.name}
                                title={user.title}
                                projects={user.projects}
                                commits={user.commits}
                                address={user.address}
                                rewards={user.rewards}
                                profileImgSrc={user.profileImgSrc}
                                profileImgAlt={user.profileImgAlt}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}