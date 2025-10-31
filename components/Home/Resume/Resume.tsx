import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className="h-auto pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* {Work Part} */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My Work <span className="text-cyan-200">Experience</span>
                </h1>
                <div className="mt-10">
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
                    <ResumeCard Icon={FaReact} role="Software Developer" />
                </div>
            </div>
            {/* {EDUCATION PART} */}
            <div> <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My  <span className="text-cyan-200">Education</span>
                </h1>
                 <div className="mt-10">
                    <ResumeCard
                     Icon={BiBadge}
                     role="Jain University" 
                     date="Aug 2022 - Jul 2026"
                     description="Pursuing my B.Tech in Computer Science and Engineering"
                     
                     />
                    <ResumeCard
                     Icon={FaReact}
                     role="Indian Public School" 
                     date="March 2020 - Jul 2022"
                     />
                     
                    
                
                </div>
                </div>
        </div>
      
    </div>
  )
}

export default Resume
