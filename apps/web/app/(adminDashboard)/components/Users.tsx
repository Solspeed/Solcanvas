"use client";
import React, { useState, useEffect } from "react";
import copy from "../../../public/images/dashboard/copy.svg";
import supabase from "../../../supabase";

interface User {
  id: number;
  name: string;
  tagline: string;
  projects: number;
  commits: number;
  wallet_id: string;
  rewards: number;
  logoImageUrl: string;
  profileImgAlt: string;
}

interface ProfileProps {
  name: string;
  tagline: string;
  projects: number;
  commits: number;
  wallet_id: string;
  rewards: number;
  logoImageUrl: string;
  profileImgAlt: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  tagline,
  projects,
  commits,
  wallet_id,
  rewards,
  logoImageUrl,
  profileImgAlt,
}) => {
    return (
        <section className="grow px-4 py-4 w-full rounded-xl bg-neutral-900 max-md:mt-6 max-w-full">
            <div className="flex">
                <figure className="flex flex-row">
                    <img
                        loading="lazy"
                        src={logoImageUrl}
                        alt={profileImgAlt}
                        className="grow object-cover max-md:mt-6"
                    />
                </figure>
                <div className="flex flex-col ml-2 w-9/12">
                    <div className="flex flex-col max-md:mt-6">
                        <div className="flex gap-5 px-px">
                            <div className="flex flex-col flex-1 mt-2">
                                <h1 className="text-base font-medium font-nunito text-white">{name}</h1>
                                <p className="mt-2.5 font-nunito text-xs text-white text-opacity-80">{tagline}</p>
                                <div className="self-start justify-self-end mt-auto flex px-2 w-fit py-1.5 text-sm text-[#954AD2] rounded-md bg-neutral-950">
                                    <span className="sm:text-sm text-xs">{wallet_id}</span>
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

export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase
                    .from('project_listing')
                    .select('id, name, tagline, wallet_id, logoImageUrl');

                if (error) {
                    console.error("Error fetching users:", error.message);
                    return;
                }

                const usersWithProjects = data.map((user: any) => ({
                    ...user,
                    projects: 0, // Replace 0 with the appropriate value for 'projects'
                }));

                setUsers(usersWithProjects);
            } catch (error: any) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedUser(null);
  };

  const handleSuggestionClick = (user: User) => {
    setSelectedUser(user);
    setSearchTerm("");
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
                        tagline={selectedUser.tagline}
                        projects={selectedUser.projects}
                        commits={selectedUser.commits}
                        wallet_id={selectedUser.wallet_id}
                        rewards={selectedUser.rewards}
                       logoImageUrl={selectedUser.logoImageUrl}
                        profileImgAlt={selectedUser.profileImgAlt}
                    />
                ) : (
                    filteredUsers.map((user) => (
                        <ProfileCard
                            key={user.id}
                            name={user.name}
                            tagline={user.tagline}
                            projects={user.projects}
                            commits={user.commits}
                            wallet_id={user.wallet_id}
                            rewards={user.rewards}
                            logoImageUrl={user.logoImageUrl}
                            profileImgAlt={user.profileImgAlt}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
);
}