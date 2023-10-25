"use client"
import ProfileIntro from "../components/ProfileIntro";
import Skills from "../components/Skills";
import { useState } from "react";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import Education from "../components/Education";

export default function Home() {

  const [openModal , setOpenModal] = useState({state : false , project : null});
  const handler = () => {};

  return (
    <main>
      {/* Body */}
      <div className="w-full overflow-x-hidden bg-[#1C1C27]">
        <ProfileIntro />
        {/* Wrapper */}
        <div className="clip-wrapper w-full bg-grad">
          <Skills />
        </div>
        <Projects openModal={openModal} setOpenModal = {setOpenModal}/>
        {/* Wrapper */}
        <div className="clip-wrapper w-full bg-grad">
            <Education/>
        </div>
        {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>}
      </div>
    </main>
  );
}
