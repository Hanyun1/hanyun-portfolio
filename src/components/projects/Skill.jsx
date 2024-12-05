import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { Button } from "../ui/button";

const skills = [
    { name: "React", icon: <FaReact />},
    { name: "React2", icon: <FaReact />},
    { name: "React3", icon: <FaReact />},
    { name: "React4", icon: <FaReact />},
    { name: "React5", icon: <FaReact />},
    { name: "React6", icon: <FaReact />},
    { name: "React7", icon: <FaReact />},
    { name: "React8", icon: <FaReact />},
  ];

  const Skills = () => {
    return <div className="flex flex-col gap-2">
        <div className="font-lg font-bold ">Skills</div>

        <div className="border-2 py-4">
        <div className="justify-center items-center grid gap-4 grid-cols-[repeat(auto-fit,_minmax(65px,_1px))]">
        {skills.map((item, index) => {
            return(
                <Button key={item.name} className="flex flex-col h-[65px] w-[65px] border-2 hover:text-bright hover:border-bright hover:transition-all duration-500">
            <div className="">
                {item.icon}
              </div>
            
            <span>{item.name}</span>
          </Button>
            )
        
    })}
        </div>
        </div>
        </div>
  };
  
  export default Skills;