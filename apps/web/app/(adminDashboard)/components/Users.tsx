"use client";
import React, { useState, useEffect } from "react";
import copy from "../../../public/images/dashboard/copy.svg";
import supabase from "../../../supabase";
import avatar from "../../../public/images/user.png";

interface User {
    id: number;
    username: string;
    tagline: string;
    projects: number;
    commits: number;
    wallet_id: string;
    rewards: number;
    logoImageUrl: string;
    profileImgAlt: string;
}

interface ProfileProps {
    username: string;
    tagline: string;
    projects: number;
    commits: number;
    wallet_id: string;
    rewards: number;
    logoImageUrl: string;
    profileImgAlt: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
    username,
    tagline,
    projects,
    commits,
    wallet_id,
    rewards,
    logoImageUrl,
    profileImgAlt,
}) => {
    const truncateWalletId = (wallet_id: string) => {
        if (wallet_id.length > 10) {
            return wallet_id.substring(0, 10) + "...";
        }
        return wallet_id;
    };

    const copyToClipboard = (wallet_id: string) => {
        navigator.clipboard.writeText(wallet_id);
        alert("Wallet ID copied to clipboard");
    };

    return (
        <section className="grow px-4 py-4 w-full rounded-xl bg-neutral-900 max-w-full">
            <div className="flex">
                <div className="flex w-[99px] items-center justify-center flex-row">
                    <img
                        loading="lazy"
                        src={logoImageUrl || avatar.src}
                        alt={profileImgAlt}
                        className="grow object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col ml-2 w-9/12">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row gap-5 px-px">
                            <div className="flex flex-col flex-1 mt-2">
                                <h1 className="text-base font-medium font-nunito text-white">{username}</h1>
                                <p className="mt-2.5 font-nunito text-xs text-white text-opacity-80">Chief@{tagline}</p>
                                <div className="self-start justify-self-end mt-auto flex px-2 w-fit py-1.5 text-sm text-[#954AD2] rounded-md bg-neutral-950">
                                    <span className="sm:text-sm text-xs">{truncateWalletId(wallet_id)}</span>
                                    <img
                                        loading="lazy"
                                        src={copy.src}
                                        alt="Copy address"
                                        className="shrink-0 self-center w-3.5 aspect-square cursor-pointer"
                                        onClick={() => copyToClipboard(wallet_id)}
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
                    .select('id, username, tagline, wallet_id, logoImageUrl');

                if (error) {
                    console.error("Error fetching users:", error.message);
                    return;
                }

                const usersWithDetails = await Promise.all(data.map(async (user: any) => {
                    const { count: projectCount, error: projectError } = await supabase
                        .from('project_listing')
                        .select('*', { count: 'exact' })
                        .eq('username', user.username);

                    if (projectError) {
                        console.error("Error fetching projects for user:", user.username, projectError.message);
                        return { ...user, projects: 0, logoImageUrl: '', profileImgAlt: user.username };
                    }

                    const { data: onboardingData, error: onboardingError } = await supabase
                        .from('onboarding')
                        .select('user_image')
                        .eq('wallet_id', user.wallet_id)
                        .single();

                    if (onboardingError) {
                        console.error("Error fetching user image for user:", user.username, onboardingError.message);
                        return { ...user, projects: projectCount || 0, logoImageUrl: '', profileImgAlt: user.username };
                    }

                    return { 
                        ...user, 
                        projects: projectCount || 0,
                        logoImageUrl: onboardingData?.user_image || avatar.src,
                        profileImgAlt: user.username 
                    };
                }));

                setUsers(usersWithDetails);
            } catch (error: any) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);
    console.log(users)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSelectedUser(null);
    };

    const handleSuggestionClick = (user: User) => {
        setSelectedUser(user);
        setSearchTerm("");
    };

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col mt-12 sm:mt-6 font-silkscreen p-4 sm:p-4 xl:px-14 w-full xl:pr-[15vw] bg-black h-screen overflow-hidden">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto text-3xl text-purple-300">Users</div>
                <div className='relative w-full max-w-md'>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search users..."
                        className="w-full bg-[#151515] font-nunito rounded-full p-4 outline-none border-none text-white"
                    />
                    {searchTerm && (
                        <div className="absolute top-12 right-0 left-0 text-white text-opacity-70 bg-neutral-900 rounded-md shadow-lg z-10">
                            {filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    onClick={() => handleSuggestionClick(user)}
                                    className="px-4 py-2 cursor-pointer hover:bg-neutral-800"
                                >
                                    {user.username}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-12 flex-1 overflow-y-auto scroll-smooth">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
                    {selectedUser ? (
                        <ProfileCard
                            key={selectedUser.id}
                            username={selectedUser.username}
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
                                username={user.username}
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
