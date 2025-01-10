import React from "react";
import { MdEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMdFemale } from "react-icons/io";

const info = [
  // {
  //   title: "Name",
  //   icon: <MdDriveFileRenameOutline />,
  //   desciption: "Hanyun Zhang",
  // },
  {
    title: "Pronounce",
    icon: <IoMdFemale />,
    desciption: "She/Her",
  },
  {
    title: "Email",
    icon: <MdEmail />,
    desciption: "hanyunzhang11@gmail.com",
  },
  // {
  //   title: "Phone",
  //   icon: <FaPhoneVolume />,
  //   desciption: "0481180542",
  // },
  {
    title: "Location",
    icon: <FaLocationDot />,
    desciption: "Doncaster, Mebourne, Australia",
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
