import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="pt-16 pb-16">

<div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center py-16 font-poppins"> <h2 className="text-4xl md:text-4xl font-bold text-cyan-400 mb-6"> About Me </h2> <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"> I’m a <span className="text-white font-semibold">Software Developer</span> passionate about crafting clean, efficient, and scalable web applications. I love turning ideas into reality using <span className="text-cyan-400">latest technologies.</span> With a strong focus on user experience and performance, I strive to build products that make a real impact. Always curious, I’m continuously learning and exploring new tools to stay ahead in the ever-evolving tech landscape. </p> </div>


    <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard 
            icon="/images/s1.png"
            name="Full-Stack Development"
            description="Building scalable web applications from front to back using modern technologies and clean architecture."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="100">
            <ServiceCard 
            icon="/images/s2.png"
            name="Frontend Engineering"
            description="Building scalable web applications from front to back using modern technologies and clean architecture."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="200">
            <ServiceCard 
            icon="/images/s3.png"
            name="Design and creative"
            description="Designing responsive interfaces that are efficient, easy to use."
            />
            

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dealy="300">
            <ServiceCard 
            icon="/images/s4.png"
            name="UDevelopment"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
            />
            

        </div>
    </div>
    </div>
  )
}

export default Services;
