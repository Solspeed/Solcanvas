"use client";
import React from "react";
import projectImage from "../../../public/images/dashboard/TinyDancer.png";
import upload from "../../../public/images/dashboard/cloud.svg";
import copyIcon from "../../../public/images/dashboard/copy.svg";
import supabase from "../../../supabase";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
interface ProjectProps {
  logoImageUrl: string;
  tagline: string;
  description: string;
  views?: number;
  commits?: number;
  liveLink?: string;
  status?: "live" | "review" | "rejected";
}

const projects: ProjectProps[] = [
  {
    logoImageUrl: projectImage.src,
    tagline: "Tiny Dancer",
    description: "Solana first light client.",
    views: 350,
    commits: 35,
    liveLink: "Link",
    status: "live",
  },
  {
    logoImageUrl: projectImage.src,
    tagline: "Tiny Dancer",
    description: "Solana first light client.",
    status: "review",
  },
  {
    logoImageUrl: projectImage.src,
    tagline: "Tiny Dancer",
    description: "Solana first light client.",
    status: "rejected",
  },
];

const ProjectCard: React.FC<ProjectProps> = ({
  logoImageUrl,
  tagline,
  description,
  views,
  commits,
  liveLink,
  status,
}) => {
  let statusText = "";
  let statusClass = "";

  switch (status) {
    case "live":
      statusText = `Live on "${liveLink}"`;
      statusClass = "text-purple-300";
      break;
    case "review":
      statusText =
        "Your project is under review, you will get notified when your project is live. Can take upto 72 hours.";
      statusClass = "text-purple-600";
      break;
    case "rejected":
      statusText = (
        <>
          Rejected , for further help mail on{" "}
          <span className="text-purple-300">solcanvas2024@gmail.com</span>
        </>
      ).toString();
      statusClass = "text-purple-300";
      break;
  }

  return (
    <div className="flex flex-col grow pt-4 w-full rounded-xl bg-neutral-900">
      {status === "live" && (
        <div className="flex flex-1 justify-between gap-5 w-full ">
          <div className="flex gap-2 self-start ">
            <img
              src={logoImageUrl}
              alt={tagline}
              className="shrink-0 aspect-[1.02] w-[99px] -mb-4 ml-4"
            />
            <div className="flex flex-col my-auto">
              <div className="text-base font-medium text-white">{tagline}</div>
              <div className="mt-1.5 text-xs text-white text-opacity-80">
                {description}
              </div>
            </div>
          </div>
          <div className="flex  font-silkscreen  gap-5 mt-auto sm:mr-6">
            <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
              <div className="text-xs text-white">Views</div>
              <div className="mt-3 text-xl font-bold text-purple-300">
                {views}
              </div>
            </div>
            <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
              <div className="text-xs text-white">Commits</div>
              <div className="mt-3 text-xl font-bold text-purple-300">
                {commits}
              </div>
            </div>
          </div>
        </div>
      )}
      {status !== "live" && (
        <div className="flex gap-2 self-start ">
          <img
            src={logoImageUrl}
            alt={tagline}
            className="shrink-0 aspect-[1.02] w-[99px] -mb-4 ml-4"
          />
          <div className="flex flex-col my-auto">
            <div className="text-base font-medium text-white">{tagline}</div>
            <div className="mt-1.5 text-xs text-white text-opacity-80">
              {description}
            </div>
          </div>
        </div>
      )}
      <div
        className={`justify-center text-center items-center px-16 py-4 text-xs tracking-wider rounded-none  bg-black bg-opacity-90 max-md:px-5 max-md:max-w-full ${statusClass}`}
      >
        {statusText}
      </div>
    </div>
  );
};

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]); // State for project data
  const [isLoading, setIsLoading] = useState(true);
  const { publicKey } = useWallet();

  const walletId = publicKey?.toString() || "";

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      if (!walletId) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const { data, error } = await supabase
          .from("project_listing")
          .select("*")
          .eq("wallet_id", walletId);

        if (error) {
          console.error("Error fetching projects:", error.message);
        } else if (isMounted) {
          setProjects(data || []); // Set projects state or an empty array if no data
        }
      } catch (error: any) {
        console.error("Error fetching projects:", error.message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (walletId) {
      fetchProjects(); // Fetch projects when walletId is available
    }

    return () => {
      isMounted = false;
    };
  }, [walletId]);
  console.log("projects", projects);
  return (
    <div className="flex flex-col grow mt-5 max-md:mt-10 max-md:max-w-full">
      {projects.map((project, index) => (
        <div key={index} className={index > 0 ? "mt-5" : ""}>
          <ProjectCard {...project} />
        </div>
      ))}
      <div className="self-center mt-5 text-xs text-white text-opacity-50">
        View More
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col items-start py-4 pr-20 pl-3 w-full rounded-xl bg-neutral-900 max-md:pr-5 max-md:mt-10">
      <div className="text-sm text-white">{label}</div>
      <div
        className={`mt-11 text-4xl font-bold max-md:mt-10 ${
          label === "Your Rewards" ? "text-orange-600" : "text-purple-600"
        }`}
      >
        {value}
      </div>
    </div>
  );
};
const Main = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { publicKey } = useWallet();

  const walletId = publicKey?.toString() || "";
  console.log("walletId", walletId);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchProjectCount = async () => {
      if (!walletId) {
        setIsLoading(false);
        return; // Exit early if walletId is not available yet
      }

      setIsLoading(true);

      try {
        const { count, error } = await supabase
          .from("project_listing")
          .select("*", { count: "exact" })
          .eq("wallet_id", walletId);

        if (error) {
          console.error("Error fetching project count:", error.message);
        } else if (isMounted) {
          // Update state only if component is still mounted
          setProjectCount(count || 0); // Default to 0 if count is undefined
        }
      } catch (error: any) {
        console.error("Error fetching project count:", error.message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (walletId) {
      fetchProjectCount();
    }

    return () => {
      isMounted = false; // Cleanup: Set flag to false when component unmounts
    };
  }, [walletId]);

  console.log("projectCount", projectCount);
  return (
    <div
      className="bg-black overflow-scroll scroll-smooth
     p-12 w-full flex justify-between"
    >
      <main className="flex flex-col ml-5  max-md:ml-0 w-full">
        <section className="flex flex-col self-stretch my-auto  max-w-full">
          <h1 className="text-3xl text-purple-300 max-w-full">
            Gm, "user name"
          </h1>
          <div className="mt-16 flex max-md:mt-10 max-w-full">
            <div className="flex gap-5 flex-col max-md:gap-0">
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex-col  bg-stone-950 flex items-center p-7 py-8 rounded-full justify-center">
                      <img src={upload.src} alt="User avatar" />
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                      <div className="flex gap-2.5 self-stretch p-3 my-auto w-full text-sm text-red-600 whitespace-nowrap rounded-md bg-stone-950 max-md:flex-wrap max-md:mt-10">
                        <div className="flex-auto max-md:max-w-full">
                          {walletId}
                        </div>
                        <img
                          src={copyIcon.src}
                          alt="Copy icon"
                          className="shrink-0 w-3.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                                <ProjectCard {...projects[0]} />
                            </div> */}
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <ProjectList />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col sm:ml-5 ml-0 w-full">
                <StatCard label="Your Projects" value={projectCount} />
              </div>
              <div className="flex flex-col sm:ml-5  ml-0 w-full">
                <StatCard label="Your Projects" value={13} />
              </div>
              <div className="flex flex-col sm:ml-5  ml-0 w-full">
                <StatCard label="Your Projects" value={13} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
