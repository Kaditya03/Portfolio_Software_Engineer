"use client";
import React from 'react';
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';


const Hero = () => {
  return (
<div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
  <ParticlesHero />
<div className="relative z-10 flex flex-col items-center">
<Image 
src="/images/Kumar_Aditya1.jpg"
alt="heroimage"
width={170}
height={150}
className="rounded-full  border-5 border-[#0c0c48aa]"
data-aas="fade-up"

 />
<h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide">
  Building scaleable, <br/>
  <span className="text-cyan-200">full-stack web applications.</span>
</h1>
<h2 
data-aos="fade-up"
 data-aos-delay="400"
className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
  Hi ! I&apos;m Kumar Aditya - A Passionate
  <span className="text-cyan-200 font-bold">
    <Typewriter options={{
strings:[

  ' Frontend Developer',
  ' Backend Developer',
  ' Software Engineer'
],
autoStart:true,
loop:true,
delay:75,
deleteSpeed:50,
wrapperClassName:"pl-2",
    }} />
  </span>
</h2>
<button 
data-aos="fade-up" data-aos-delay="600"
className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
  onClick={()=>{
    const section =document.getElementById("projects");
    if(section){
      section.scrollIntoView({ behavior:"smooth"});
    }
  }}
  >
  <span>See my work</span>
  <BsArrowRight className="w-s h-5 ml-2 inline-block" />
</button>
</div>  
</div>
  );
};

export default Hero;
