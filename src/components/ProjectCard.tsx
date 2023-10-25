import Image from "next/legacy/image";
interface memberType {
  name: string;
  img: string;
  linkedin: string;
  github: string;
}

interface projectType {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  member: memberType[];
}


const ProjectCard: React.FC<{ project: projectType , setOpenModal : any}> = ({ project, setOpenModal}) => {

  const clickHandler = () => {
    setOpenModal({state:true , project:project});
  }
  

  // Card
  return (
    <div id="project" onClick={clickHandler} className="w-[330px] h-[490px] bg-[#171721] cursor-pointer rounded-xl shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden px-5 py-6 flex flex-col gap-4 transition-all ease-in-out duration-500 hover:translate-y-[-10px] hover:brightness-110 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)]">
      {/* Img */}
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-44 bg-white rounded-lg shadow-[0_0_16px_10px_rgba(0,0,0,0.3)]"
        // style={{
        //   width: "100%",
        //   height: "176px",
        // }}
        width={320}
        height={176}
        // unoptimized
      />
      {/* Tags */}
      <div className=" w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag) => (
          <span
            className=" text-xs font-normal text-[#854CE6] span-bg rounded-xl px-2 py-[2px]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Details */}
      <div className=" w-full flex flex-col gap-0 py-0 px-[2px]">
        {/* title */}
        <div className="text-xl font-semibold overflow-hidden text-[#b1b2b3] max-w-full text-ellipsis line-clamp-2">
          {project.title}
        </div>
        {/* Date */}
        <div className="text-xs ml-[2px] font-normal text-[#b1b2b3] max-md:text-xs">
          {project.date}
        </div>
        {/* Desc */}
        <div className=" font-normal text-[#b1b2b3] text-opacity-60 overflow-hidden mt-2 max-w-full line-clamp-3 text-ellipsis">
          {project.description}
        </div>
      </div>
      {/* Members */}
      <div>
      {project.member?.map((mem) => <Image key={mem.name} src={mem.img} alt={mem.name} width={36} height={36} className="w-9 h-9 rounded-full -ml-[10px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.2)] border-solid border-2"/>)}
      </div>
    </div>
  );
};

export default ProjectCard;
