import { Button } from "../ui/button";

const Skills = ({ skills, selectedSkills }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-bold ">Skills</div>

      <div className="border-2 py-4">
        <div className="place-items-center justify-center grid gap-3 grid-cols-[repeat(auto-fit,_minmax(30px,130px))]">
          {skills.map((item) => {
            const isSelected = selectedSkills.includes(item.name);
            return (
              <Button
                key={item.name}
                className={`[&_svg]:size-5 rounded-full flex flex-col h-[65px] w-[105px] border-2 ${
                  isSelected ? "text-bright border-bright" : ""
                } hover:text-bright hover:border-bright transition-all duration-500`}
              >
                {item.icon}

                <span className="text-xs font-extralight">{item.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
