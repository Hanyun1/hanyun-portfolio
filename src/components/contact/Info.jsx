import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

const info = [
  {
    title: "Email",
    icon: <MdEmail />,
    desciption: "hanyzhang1@gmail.com",
  },
  {
    title: "Phone",
    icon: <FaPhoneVolume />,
    desciption: "0481180542",
  },
  {
    title: "Location",
    icon: <FaLocationDot />,
    desciption: "600 Doncaster Rd, Doncaster, Mebourne, Australia",
  },
];

const Info = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-3">
      {info.map((item) => {
        return (
          <div
            key={item.title}
            className="[&_svg]:size-6 text-bold items-center flex flex-row w-full gap-3"
          >
            {item.icon}
            <div className="flex flex-col">
              <div className="font-bold">{item.title}</div>
              <div className="text-sm font-thin">{item.desciption}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
