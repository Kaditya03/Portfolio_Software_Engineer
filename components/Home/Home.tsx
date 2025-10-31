import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";

const Home = () => {
 return <div className="overflow-visible h-auto">
    <Hero />
    <Services />
    <Resume />
    <Projects />
 </div>;
  
}

export default Home
