"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Fardeen from '../../Public/Images/Fardeen.jpg'
import { Bio } from "@/data/constant";

const ProfileIntro = () => {

    const resumeOpenHandler = () => {
        let url = Bio.resume;
        window.open(url ,"_blank")
    }

  return (
    <div id="about">
      {/* hero container */}
      <div className="bg-[#191924] flex justify-center items-center relative py-20 px-[30px] z-[1] max-sm:px-4 max-sm:py-8 max-md:px-4 max-md:py-16 clip-your-needful-style">
        {/* bg conatiner */}
        <div className=" absolute flex justify-end top-2/4 right-0 bottom-0 left-2/3 overflow-hidden w-full h-full transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* inner container */}
        <div className="flex justify-between items-center max-w-screen-xl relative max-[960px]:flex-col">
          {/* left container */}
          <div className="w-full order-1 max-[960px]:order-2 max-[960px]:mb-8 max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center max-[960px]:justify-center">
            {/* Title */}
            <div className="text-5xl font-bold text-[#F2F3F4] leading-[68px] max-[960px]:text-center max-sm:text-[40px] max-sm:leading-[48px] max-sm:mb-2">
              Hi, I am <br /> {Bio.name}
            </div>
            {/* Text loop */}
            <div className=" font-semibold text-[32px] flex gap-3 text-[#F2F3F4] leading-[68px] max-[960px]:text-center max-sm:text-[22px] max-sm:leading-[48px] max-sm:mb-4">
              I am a{" "}
              <span className=" cursor-pointer text-[#854CE6]">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            {/* Sub Title */}
            <div>
              <div className=" text-xl leading-8 mb-10 text-[#f2f3f4] opacity-[0.5] max-[960px]:text-center max-sm:text-base max-sm:leading-8">
               {Bio.description}
              </div>
              {/* Resume Button */}
              <div id="button-div" className=" max-[960px]:flex max-[960px]:justify-center">
                <button
                  className="appearance-none w-[95%] max-w-[300px] text-center py-4 px-0 text-white rounded-[20px] cursor-pointer text-xl font-semibold transition-all ease-in-out duration-200 bg-[#8400ff] opacity-100 bg-gradient-to-br from-indigo-start to-indigo-end shadow-[0_20px_20px_60px_rgba(31,38,52,0.1)] group hover:scale-105 hover:transition-transform hover:shadow-lg hover:brightness-100 max-sm:py-3 max-sm:px-0 max-sm:text-lg"
                  onClick={resumeOpenHandler}
                >
                  Check Resume
                </button>
              </div>
             
            </div>
          </div>
          {/* right container */}
          <div className="order-2 flex justify-end gap-3 max-[960px]:order-1 max-[960px]:justify-center max-[960px]:items-center max-[960px]:mb-20 max-sm:mb-8">
            <Image className=" relative w-full h-full max-w-[400px] max-h-[400px] rounded-full" alt="Fardeen Profile Photo" src={Fardeen}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
