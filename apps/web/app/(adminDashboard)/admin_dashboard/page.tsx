'use client'
import React, { useState } from 'react';
import Main from "../components/Main";
import Projects from "../components/Projects";
import Users from "../components/Users";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Main />;
      case 'projects':
        return <Projects />;
      case 'users':
        return <Users />;
      default:
        return <Main />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div className={`fixed top-0 left-0 h-full bg-[#0A0A0A] z-40 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:relative sm:translate-x-0`}>
        <div className="sm:flex font-silkscreen h-full flex-col justify-between">
          <div className="flex flex-col grow px-9 pt-14 pb-9 w-full text-base whitespace-nowrap">
            <div className="text-xl text-[#954AD2] font-bold">Solcavas</div>
            <button
              className={`mt-36 ${activeComponent === 'home' ? 'text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'} rounded px-4 py-2`}
              onClick={() => {
                setActiveComponent('home');
                setIsSidebarOpen(false);
              }}
            >
              Home
            </button>
            <button
              className={`mt-12 ${activeComponent === 'projects' ? 'text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'} max-md:mt-10 rounded px-4 py-2`}
              onClick={() => {
                setActiveComponent('projects');
                setIsSidebarOpen(false);
              }}
            >
              Projects
            </button>
            <button
              className={`mt-12 ${activeComponent === 'users' ? 'text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'} max-md:mt-10 rounded px-4 py-2`}
              onClick={() => {
                setActiveComponent('users');
                setIsSidebarOpen(false);
              }}
            >
              Users
            </button>
          </div>
          <button className="self-center mb-12 text-[#954AD2]">Exit</button>
        </div>
      </div>
      <div className="flex-1 md:flex h-full relative overflow-y-auto">
        <div className="sm:hidden absolute top-5 left-5 z-50">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isSidebarOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        {renderComponent()}
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          .sm\\:translate-x-0 {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}