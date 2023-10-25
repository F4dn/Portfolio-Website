import Image from "next/image"
import { skills } from "../data/constant"
const Skills = () => {
    return <div id="skills" className="flex flex-col justify-center relative z-[1] items-center pt-10 pr-0 pb-20 pl-0">
        {/* Wrapper */}
        <div className="relative flex justify-between items-center flex-col w-full max-w-6xl gap-3 max-[960px]:flex-col">
            {/* title */}
            <div className=" text-[42px] items-center font-semibold mb-5 text-[#F2F3F4] max-md:mt-3 max-md:text-[32px]">
                Skills
            </div>
            {/* Desc */}
            <div className=" text-lg text-center max-w-[600px] text-[#b1b2b3] max-md:text-base">
            Below are some of the key skills that will define my professional journey
            </div>
            {/* Skill Conatiner */}
            <div className="w-full flex flex-wrap mt-8 gap-7 justify-center">
                {skills.map((skill) => (
                    // skill
                    <div key={skill.title} className=" w-full max-w-lg bg-[#171721] border-[#854CE6] border-solid border-2 rounded-2xl py-[18px] px-9 max-md:max-w-[400px] max-md:py-[10px] max-md:px-9 max-[500px]:max-w-[330px]">
                        {/* skill title */}
                        <h2 className=" text-3xl font-semibold text-[#b1b2b3] mb-5 text-center">{skill.title}</h2>
                        {/* skill list */}
                        <div className=" flex justify-center flex-wrap gap-3 mb-5">
                            {skill.skills.map((item) => (
                                // Skill item
                                <div key={item.name} className="text-base font-normal text-[#f2f3f4] border-solid border-[1px] border-[#b1b2b3] border-opacity-50 rounded-xl py-3 px-4 flex items-center justify-center gap-2 max-md:text-sm max-md:px-3 max-md:py-2 max-[500px]:py-[6px]">
                                    <Image src={item.image} alt={item.name} className=" w-6 h-6" width={24} height={24}/> 
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Skills;