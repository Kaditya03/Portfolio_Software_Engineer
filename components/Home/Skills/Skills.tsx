"use client";
import React from 'react'
import { FaJava } from 'react-icons/fa';
import {  SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from "react-parallax-tilt";

const skills=[
    {
        name: "Java",
        icon: <FaJava />,
        percentage: 90,

    },
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        percentage: 90,

    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        percentage: 92,

    },
    {
        name: "React.js",
        icon: <SiReact />,
        percentage: 92,

    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        percentage: 88,

    },
      {
        name: "javascript",
        icon: <SiJavascript />,
        percentage: 85,

    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        percentage: 85,

    },
    {
        name: "Tailwindcss",
        icon: <SiTailwindcss />,
        percentage: 80,

    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        percentage: 80,

    },
     {
        name: "Github",
        icon: <SiGithub />,
        percentage: 90,

    },
     {
        name: "HTML",
        icon: <SiHtml5 />,
        percentage: 95,

    },
     {
        name: "CSS",
        icon: <SiCss3 />,
        percentage: 95,

    },

]


const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My <span className="text-cyan=300">SKills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skil)=>{
                return (
                    <Tilt key ={skil.name} scale={1.5} transitionSpeed={400} >
                        <div
                        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
                        className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                            <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
                            <p className="text-2xl font-semibold">{skil.percentage}%</p>
                            <p className="text-purple-400 mt-1">{skil.name}</p>
                        </div>
                    </Tilt> 
                );
            })}
        </div>
      
    </div>
  );
};

export default Skills;
