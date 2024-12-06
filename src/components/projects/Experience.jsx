import React from "react";

const Experience = ({ title, content }) => {
  return (
    <div className="border p-3 h-[500px] w-full flex flex-col gap-8 ">
      <div className="text-bold">{title}</div>
      <div className="whitespace-pre-line">{content}</div>
    </div>
  );
};

export default Experience;
