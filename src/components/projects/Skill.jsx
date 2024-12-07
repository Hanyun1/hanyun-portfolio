import Link from "next/link";
import { Button } from "../ui/button";

const Skills = ({skills, selectedSkills}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-lg font-bold ">Skills</div>

      <div className="border-2 py-4">
        <div className="place-items-center justify-center grid gap-3 grid-cols-[repeat(auto-fit,_minmax(30px,130px))]">
          {skills.map((item) => {
            const isSelected = selectedSkills.includes(item.name);
            return (
              <Button
                key={item.name}
                className={`flex flex-col h-[65px] w-[100px] border-2 ${
                  isSelected ? 'text-bright border-bright' : ''
                } hover:text-bright hover:border-bright transition-all duration-500`}
              >
                <div className="text-2xl">{item.icon}</div>

                <span>{item.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
