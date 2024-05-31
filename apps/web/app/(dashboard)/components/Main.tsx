"use client";
import React, { useEffect, useState } from "react";
import uploadIcon from "../../../public/images/dashboard/cloud.svg";
import copyIcon from "../../../public/images/dashboard/copy.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import supabase from "../../../supabase";
import { useRouter } from 'next/navigation'

interface ProjectProps {
  logoImageUrl: string;
  name: string;
  tagline: string;
  views?: number;
  // commits?: number;
  liveLink?: string;
  status?: "live" | "requested" | "rejected";
}

const ProjectCard: React.FC<ProjectProps> = ({
  logoImageUrl,
  name,
  tagline,
  views,
  // commits,
  liveLink,
  status,
}) => {
  let statusText: React.ReactNode = "";
  let statusClass = "";
  const router = useRouter();

  const handleClick = () => {
    router.push(`/marketplace/${name}`)
  }

  switch (status) {
    case "live":
      statusText = (
        <div className="text-[#42FF00] text-sm">
          Live on "<span onClick={handleClick} className="text-[#DCA7FB] hover:cursor-pointer"> Link</span>  "
        </div>
      );
      statusClass = "text-purple-300";
      break;
    case "requested":
      statusText =
        "Your project is under review, you will get notified when your project is live. Can take up to 72 hours.";
      statusClass = "text-purple-600";
      break;
    case "rejected":
      statusText = (
        <>
          Rejected, for further help mail on{" "}
          <span className="text-purple-300">solcanvas2024@gmail.com</span>
        </>
      );
      statusClass = "text-purple-300";
      break;
  }

  return (
    <div className="flex flex-col w-full font-nunito pt-4  rounded-xl bg-neutral-900">
      {status === "live" && (
        <div className="flex flex-1 justify-between gap-5 w-full ">
          <div className="flex gap-2 self-start ">
            <img
              src={logoImageUrl}
              alt={name}
              className="shrink-0 aspect-[1.02] w-[99px] -mb-4 ml-4"
            />
            <div className="flex flex-col my-auto">
              <div className="text-base font-medium text-white">{name}</div>
              <div className="mt-1.5 text-xs text-white text-opacity-80">
                {tagline}
              </div>
            </div>
          </div>
          <div className="flex font-silkscreen gap-5 mt-auto sm:mr-6">
            {/* <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
                <div className="text-xs text-white">Views</div>
                <div className="mt-3 text-xl font-bold text-purple-300">
                  {views}
                </div>
              </div> */}
            {/* <div className="flex flex-col py-1 pr-6 pl-2 items-start rounded-t-md bg-stone-950">
                <div className="text-xs text-white">Commits</div>
                <div className="mt-3 text-xl font-bold text-purple-300">
                  {commits}
                </div>
              </div> */}
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
            <div className="text-base font-medium text-white">{name}</div>
            <div className="mt-1.5 text-xs text-white text-opacity-80">
              {tagline}
            </div>
          </div>
        </div>
      )}

      <div
        className={`justify-center text-center items-center px-16 py-4 text-xs tracking-wider rounded-none bg-black bg-opacity-90 max-md:px-5 max-md:max-w-full ${statusClass}`}
      >
        {statusText}
      </div>
    </div>
  );
};

const ProjectList: React.FC<{ walletId: string }> = ({ walletId }) => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex flex-col grow mt-5 max-md:mt-10 w-full">
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
    <div className="flex flex-col items-start py-4 pl-3 w-full rounded-xl bg-neutral-900 max-md:pr-5 max-md:mt-10">
      <div className="text-sm text-white">{label}</div>
      <div
        className={`mt-11 text-4xl font-bold max-md:mt-10 ${label === "Your Rewards" ? "text-orange-600" : "text-purple-600"
          }`}
      >
        {value}
      </div>
    </div>
  );
};

const Main = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [rewards, setRewards] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const { publicKey } = useWallet();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const walletId = publicKey?.toString() || "";
  console.log("walletId", walletId);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCopyAddress = () => {
    if (walletId) {
      navigator.clipboard.writeText(walletId).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchProjectCountAndUsername = async () => {
      if (!walletId) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        // Fetch project count from project_listing table
        const { data, count, error } = await supabase
          .from("project_listing")
          .select("*", { count: "exact" })
          .eq("wallet_id", walletId);

        if (error) {
          console.error("Error fetching project count:", error.message);
        } else if (isMounted) {
          setProjectCount(count || 0); // Default to 0 if count is undefined
          setRewards(count !== null && count > 0 ? 1 : 0); // Set rewards based on project count
        }

        // Fetch username from onboarding table
        const { data: onboardingData, error: onboardingError } = await supabase
          .from("onboarding")
          .select("name")
          .eq("wallet_id", walletId)
          .single();

        if (onboardingError) {
          console.error("Error fetching username:", onboardingError.message);
        } else if (isMounted && onboardingData) {
          setUsername(onboardingData.name); // Set username from the onboarding table
        }
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (walletId) {
      fetchProjectCountAndUsername();
    }

    return () => {
      isMounted = false;
    };
  }, [walletId]);

  const truncatedWalletId = walletId
    ? walletId.length > 10
      ? `${walletId.substring(0, 6)}...${walletId.substring(walletId.length - 4)}`
      : walletId
    : "";

  console.log("projectCount", projectCount);
  return (
    <div
      className="bg-black overflow-y-scroll overflow-x-hidden font-silkscreen scroll-smooth
      sm:p-12 sm:mt-0 p-4 w-full flex justify-between"
    >
      <main className="flex flex-col w-full">
        <section className="flex flex-col self-stretch">
          <h1 className="text-3xl sm:ml-0 ml-16 text-purple-300 max-w-full">
            Gm, {username}
          </h1>
          <div className="mt-16 flex lg:flex-row  flex-col max-md:mt-10">
            <div className="flex gap-5 flex-col lg:w-[55vw]">
              <div className="flex flex-col max-md:ml-0 w-full">
                <div className="max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex-col flex shrink-0 bg-stone-950 items-center sm:w-44 w-24 h-24 sm:h-44 p-2 rounded-full justify-center relative">
                      {!uploadedImage ? (
                        <img src={uploadIcon.src} alt="User avatar" className="w-16 h-16 object-fit rounded-full" />
                      ) : (
                        <img src={uploadedImage ?? ''} alt="Uploaded" className="w-full  h-full object-cover rounded-full" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
                      <div className="flex gap-2.5 self-stretch p-3 my-auto w-full text-sm text-red-600 whitespace-nowrap rounded-md bg-stone-950 max-md:flex-wrap max-md:mt-10">
                        {walletId ? (
                          <>
                            <div className="sm:hidden flex-auto max-md:max-w-full">
                              {truncatedWalletId}
                            </div>
                            <div className="hidden sm:block flex-auto max-md:max-w-full">
                              {walletId}
                            </div>
                          </>) : (
                          <div className="flex-auto max-md:max-w-full">
                            Connect your wallet to see your wallet address
                          </div>
                        )}
                        <img
                          onClick={handleCopyAddress}
                          src={copyIcon.src}
                          alt="Copy icon"
                          className="cursor-pointer shrink-0 w-3.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectList walletId={walletId} />
            </div>
            <div className="flex text-nowrap lg:mt-0 mt-12 flex-row flex-1 lg:flex-col gap-4 sm:gap-12">
              <div className="flex flex-col sm:ml-5 ml-0 w-full">
                <StatCard label="Your Projects" value={projectCount} />
              </div>
              <div className="flex flex-col sm:ml-5 ml-0 w-full">
                <StatCard label="Your Rewards" value={rewards} />
              </div>
              {/* <div className="flex flex-col sm:ml-5 ml-0 w-full">
                  <StatCard label="Your Commits" value={13} />
                </div> */}
            </div>
          </div>
        </section>
        {isCopied && (
          <div className="absolute z-50 top-4 right-8 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
            Wallet address copied!
          </div>
        )}
      </main>
    </div>
  );
};

export default Main;
