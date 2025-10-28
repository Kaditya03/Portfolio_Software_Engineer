"use client";
import React from 'react';
import Image from "next/image";
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
<div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
<div className="relative z-10 flex flex-col items-center">
<Image 
src="/images/Kumar_Aditya1.jpg"
alt="heroimage"
width={170}
height={150}
className="rounded-full  border-5 border-[#0c0c48aa]"

 />
<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide">
  Building scaleable, <br/>
  <span className="text-cyan-200">full-stack web applications.</span>
</h1>
<h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
  Hi ! I&apos;m Kumar Aditya - A Passionate
  <span className="text-cyan-200 font-bold">
    <Typewriter options={{
strings:[

  ' Full-Stack Developer',
  ' Software Developer'
],
autoStart:true,
loop:true,
delay:75,
deleteSpeed:50,
wrapperClassName:"pl-2",
    }} />
  </span>
</h2>
</div>
</div>
  );
};

export default Hero;
