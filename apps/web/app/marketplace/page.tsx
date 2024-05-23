"use client";
import React, { useState, useRef } from "react";
import ItemBar from "./components/ItemBar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";

interface PageContentState {
  isWalletClicked: boolean;
  contentToShow: "recommendations" | "walletContent";
}

interface Project {
  id: string;
  bannerImageUrl: string;
  logoImageUrl: string;
  name: string;
  tagline: string;
  category: string;
}

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [state, setState] = useState<PageContentState>({
    isWalletClicked: false,
    contentToShow: "recommendations",
  });

  const projectRef = useRef<HTMLDivElement>(null);

  function handleWalletClick() {
    setState({
      ...state,
      isWalletClicked: true,
      contentToShow: "walletContent",
    });
  }

  function handleProjectSelect(project: Project | null) {
    setSelectedProject(project);
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="bg-black font-nunito overflow-x-hidden h-screen">
      <Navbar />
      <div className="space-y-16">
        <ItemBar
          isWalletClicked={state.isWalletClicked}
          onWalletClick={handleWalletClick}
          onProjectSelect={handleProjectSelect}
        />
        <div className="xl:pt-16">
          {state.contentToShow === "recommendations" && <Recommendation />}
          {state.contentToShow === "walletContent" && <Balance />}
        </div>
        <div ref={projectRef}>
          {state.contentToShow === "recommendations" && <Projects selectedProject={selectedProject} />}
          {state.contentToShow === "walletContent" && <Transactions />}
        </div>
      </div>
      <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start sm:pt-[5.81rem] pt-[5.6rem] px-[0rem] pb-[0rem] box-border gap-[14.19rem] tracking-[normal] mq450:gap-[8rem] mq1000:gap-[14.19rem]">
        <Footer />
      </div>
    </div>
  );
}
