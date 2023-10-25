import { modalType } from "./TypesOfProject";
import Image from "next/legacy/image";
import Modal from "./Modal";
import { GiCrossedBones } from "react-icons/gi";

const ProjectDetails: React.FC<{ openModal: modalType; setOpenModal: any }> = ({
  openModal,
  setOpenModal,
}) => {
  const project = openModal?.project;

  if (project === null) return;

  const clickHandler = () => {
    setOpenModal({ state: false, project: null });
  };

  // Modal
  return (
    <Modal onClose={clickHandler} openModal={openModal}>
      {/* Continer */}
      <div className=" w-full h-full absolute top-0 left-0 flex bg-[#000000a7] justify-center transition-all ease-linear duration-500 overflow-y-scroll">
        {/* Wrapper */}
        <div className='max-w-[800px] w-full mx-3 my-12 rounded-2xl h-min bg-[#171721] text-["#F2F3F4] flex p-7 flex-col relative'>
          <GiCrossedBones
            style={{
              position: "absolute",
              top: "8px",
              right: "10px",
              cursor: "pointer",
              padding : '2px',
            }}
            size = {28}
            color="red"
            onClick={clickHandler}
          />
          {/* img */}
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full object-cover rounded-xl mt-40 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
            height={400}
            width={300}
            unoptimized
          />
          {/* Title */}
          <div className="text-3xl font-semibold text-[#F2F3F4] mt-2 mx-[6px] mb-0 max-sm:text-2xl max-sm:mt-[6px]">
            {project?.title}
          </div>
          {/* Date */}
          <div className=" text-base my-[2px] mx-[6px] text-[#b1b2b3] max-md:text-xs">
            {project?.date}
          </div>
          {/* Tags */}
          <div className=" flex flex-wrap mx-0 my-2 max-sm:my-1">
            {project?.tags.map((tag) => (
              <div
                key={tag}
                className=" text-sm font-normal text-[#854CE6] m-1 mx-2 my-1 rounded-lg bg-[#854CE6]/[0.125] max-sm:text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
          {/* Desc */}
          <div className=" text-base font-normal text-[#F2F3F4] my-2 mx-[6px] max-sm:text-xs max-sm:my-[6px]">
            {project?.description}
          </div>

          {
            // project.member &&
            // <>
            //     {/* Layout */}
            //     <div></div>
            //     {/* Memebers */}
            //     <div>
            //         {project.member.map((mem) => (
            //             // Member
            //             <div key={mem.id}>
            //                 {/* img */}
            //             </div>
            //         ))}
            //     </div>
            // </>
          }

          {/* Button grp */}
          <div className="flex justify-end mx-0 my-3 gap-3">
            <a href={project.github} className="flex justify-center items-center h-2/3 font-medium text-base py-2.5 px-16 rounded-full bg-slate-800 text-white w-max hover:bg-purple-400">View Code</a>
            <a href={project.webapp} className="flex justify-center items-center h-2/3 font-medium text-base py-2.5 px-16 rounded-full bg-[#854CE6] text-white w-max hover:bg-opacity-80">View Live App</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
