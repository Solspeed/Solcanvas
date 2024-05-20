'use client'
import React, { useState } from 'react';
import Main from "../components/Main";
import Projects from "../components/Projects";
import Users from "../components/Users";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('home');

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

  return (
    <div className="flex">
      <div className="flex-none h-screen bg-[#0A0A0A]">
        <div className="sm:flex font-silkscreen hidden h-full flex-col justify-between">
          <div className="flex flex-col grow px-9 pt-14 pb-9 w-full text-base  whitespace-nowrap">
            <div className="text-xl text-[#954AD2] font-bold">Solcavas</div>
            <button
              className={`mt-36  ${activeComponent === 'home' ? 'text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'
                } rounded px-4 py-2`}
              onClick={() => setActiveComponent('home')}
            >
              Home
            </button>
            <button
              className={`mt-12 ${activeComponent === 'projects' ? ' text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'
                } max-md:mt-10 rounded px-4 py-2`}
              onClick={() => setActiveComponent('projects')}
            >
              Projects
            </button>
            <button
              className={`mt-12 ${activeComponent === 'users' ? ' text-white border-l-4 border-purple-500' : 'text-[#DFA9FE] bg-transparent'
                } max-md:mt-10 rounded px-4 py-2`}
              onClick={() => setActiveComponent('users')}
            >
              Users
            </button>

          </div>
          <button className="self-center mb-12 text-[#954AD2]">Exit</button>
        </div>
      </div>
      <div className="flex-1 md:flex h-screen relative">
        {renderComponent()}
      </div>
    </div>
  );
}