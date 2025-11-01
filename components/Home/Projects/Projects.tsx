
import React from 'react';
import Image from "next/image";
import Link from "next/link";



const Projects = () => {
  return (

    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">Showcasing a few of my recent <br/> {""} <span className="text-cyan-300">Projects</span> </h1>
<div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
    <div 
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
        >
        <Link href="https://car-rental-ten-beta.vercel.app/" target="_blank">
        
        <Image src="/images/carrental.webp" alt="img" width={800} height={650} className=" rounded-lg" />
        <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">DriveEase</h1>
        <h1 className="pt-2 font-medium text-white/80">Car Rental Platform <br/>MERN-Stack Project</h1>
        </Link>
    </div>

     <div 
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay="100"
     >
        <Link href="https://github.com/Kaditya03/URL_SHORTNER_Dashboard" target="_blank">
        
        <Image src="/images/url.webp" alt="img" width={800} height={650} className=" rounded-lg" />
        <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">URL-Shortener Dashboard</h1>
        <h1 className="pt-2 font-medium text-white/80">MERN-Stack Project</h1>
        </Link>
    </div>

     <div
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay="200"
     >
        <Link href="https://github.com/Kaditya03/URL_SHORTNER_Dashboard" target="_blank">
        
        <Image src="/images/travel1.webp" alt="img" width={800} height={650} className=" rounded-lg" />
        <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Tavel Diaries</h1>
        <h1 className="pt-2 font-medium text-white/80">Travel Blogging Platform <br/> HTML,CSS,JavaScript Project</h1>
        </Link>
    </div>
</div>
    </div>

  )
}

export default Projects;
