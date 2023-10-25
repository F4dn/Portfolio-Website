"use client"
import { projects } from "../data/constant";
import ProjectCard from "./ProjectCard";
import {memberType , projectType , modalType} from './TypesOfProject';

const Projects : React.FC<{openModal : modalType , setOpenModal : any}> = ({openModal , setOpenModal }) => {
    return <div id="projects" className="flex flex-col justify-center relative z-[1] items-center clip-project">
        {/* Wrapper */}
        <div className="realtive flex justify-between items-center flex-col w-full max-w-[1340px] px-0 pt-3 pb-24 gap-3 max-[960px]:flex-col">
            {/* title */}
            <div className="text-[42px] items-center font-semibold mt-5 text-[#F2F3F4] max-md:mt-3 max-md:text-3xl">Projects</div>
            {/* Desc */}
            <div className="text-lg text-center max-w-[600px] text-[#F2F3F4] max-md:text-base">Here are some of my Projects</div>
            {/* CardContainer */}
            <div className="flex justify-center gap-7 flex-wrap items-center">
                {projects.map((project) => 
                    <ProjectCard key={project.id} project = {project} setOpenModal = {setOpenModal}/>
                )}
            </div>
        </div>
    </div>
};

export default Projects;