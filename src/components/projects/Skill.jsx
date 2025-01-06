import { Button } from "../ui/button";

const Skills = ({ skills, selectedSkills }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-bold ">Skills</div>

     
        {/* <div className="place-items-center justify-center grid gap-2 grid-cols-[repeat(auto-fit,_minmax(20px,130px))]"> */}
        <div className="flex flex-wrap gap-3 border-2 p-3">
          {skills.map((item) => {
            const isSelected = selectedSkills.includes(item.name);
            return (
              <Button
                key={item.name}
                className={`[&_svg]:size-5 flex flex-col items-center h-fit w-fit gap-2 border-2 ${
                  isSelected ? "text-white bg-bright border-bright-darker" : ""
                  // } hover:text-bright hover:border-bright transition-all duration-500`}
                } cursor-default`}
              >
                {item.icon}

                <span className="text-xs/[5px] text-center font-extralight">{item.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    
  );
};

export default Skills;
