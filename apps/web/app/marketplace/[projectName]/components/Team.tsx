import React from 'react';

interface TeamMember {
    name: string;
    image: string;
    twitter: string;
    github: string;
}

interface TeamProps {
    teamMembers: TeamMember[];
}

export default function Team({ teamMembers }: TeamProps) {
    return (
        <div>
            <h2 className="self-start font-silkscreen sm:mt-40 mt-24 text-center  sm:text-[60px] text-4xl font-semibold tracking-wider leading-8 text-[#954AD2] max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
                Team
            </h2>
            <div className="grid lg:grid-cols-2 place-items-center lg:mr-0  -ml-16 sm:gap-16 sm:mt-24 mt-6">
                {Array.isArray(teamMembers) && teamMembers.map((member, index) => (
                    <div key={index} className="xl:w-[576px] xl:h-[315px] w-[476px] h-[215px] mr-4 relative sm:scale-[0.7] scale-[0.6] sm:ml-0 -ml-12 xl:scale-[1]">
                        <div className="w-[374px] h-[315px] left-0 top-0 absolute">
                            <img className="z-0 w-[317px] object-fill h-[211px] left-0 top-[104px] absolute" src="/images/marketplace/projects/avatarBg.png" alt="avatar background" />
                            <img className="z-10 w-[265px] h-[265px] object-fill left-[109px] top-0 absolute rounded-full" src={member.image} alt={`${member.name} avatar`} />
                        </div>
                        <div className="z-50 left-[450px] top-[123px] absolute text-[#954AD2] text-opacity-70 text-[26px] font-semibold leading-[30px] tracking-wide">@{member.name}<br /></div>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                            <img className="z-100 w-[37px] h-[37px] left-[410px] top-[121px] absolute" src='/Twitter.svg' alt="twitter icon" />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <img className="z-20 w-[37px] h-[37px] left-[410px] top-[173px] absolute" src='/Github.svg' alt="github icon" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
