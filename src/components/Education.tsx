import { education } from "@/data/constant";
import Image from "next/legacy/image";

// {education.map((edu) => (
// Timeline item
//   <div key={edu.id}>
//       {/* Timeline content */}
//     <div>
//       {/* Education Card */}
//       <div></div>
//     </div>
//   </div>
// ))}
//

const Education = () => {
  return (
    // Container
    <div
      id="education"
      className=" flex flex-col justify-center relative z-[1] items-center pt-0 pr-0 pb-14 pl-0 max-[960px]:p-0"
    >
      {/* Wrapper */}
      <div className=" relative flex justify-between items-center flex-col w-full max-w-[1350px] pt-10 pr-0 pb-0 pl-0 gap-3">
        {/* Title */}
        <div className=" text-[42px] items-center max-w-[600px] mt-5 text-[#F2F3F4] max-md:text-3xl">
          Education
        </div>
        {/* Description */}
        <div className=" text-lg items-center max-w-[600px] text-[#b1b2b3] max-md:mt-3 max-md:text-base">
          This section serves as the foundation upon which my knowledge and
          skills are built. It reflects the formal training and academic
          experiences that have shaped my professional journey.
        </div>
        {/* Timeline Section */}
        <div className=" w-full max-w-6xl mt-3 flex flex-col items-center justify-center gap-3 max-sm:items-end">
          <ol className="border-l-2 border-purple-600">
            <li>
              <div className="flex items-baseline">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="curentColor"
                    className="h-5 w-5 fill-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="px-4 py-3 flex h-[250px] w-[550px] flex-col overflow-hidden relative gap-4 rounded-lg shadow-md shadow-black/5 bg-[#171721]">
                  <div className="mb-4 flex justify-between gap-3">
                    <Image
                      src={education[0].img}
                      alt={education[0].school}
                      width={60}
                      height={60}
                    />
                    <div className="flex w-full flex-col items-start">
                      <div className="text-sm text-white">
                        {education[0].school}
                      </div>
                      <div className="text-xs ml-[2px] font-normal text-[#b1b2b3] max-md:text-xs">
                        04 / 02 / 2022
                      </div>
                      <div className="font-normal text-[#b1b2b3] text-opacity-60 mt-2 max-w-full line-clamp-3 text-ellipsis">{education[0].degree}</div>
                    </div>
                  </div>
                  <div className="font-normal text-[#b1b2b3] text-opacity-60 max-w-full">{education[0].grade}</div>
                  <div className="font-normal text-[#b1b2b3] text-opacity-60 mb-3 w-full">
                    <p className="overflow-hidden max-wx-full line-clamp-4 text-ellipsis">{education[0].desc}</p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
