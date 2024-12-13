import React from "react";

const Experience = ({ title, location, content }) => {
  return (
    <div className="border p-3 h-[500px] w-full flex flex-col gap-8 ">
      <div className="text-bold">
        {title} <br />
        <sapn className="text-sm font-extralight italic">{location}</sapn>
      </div>
      <ul className="w-full flex flex-col gap-2 ">
        {content.map((item) => {
          return (
            <li key={item} className="text-xs">
              <span className="font-black">· </span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
