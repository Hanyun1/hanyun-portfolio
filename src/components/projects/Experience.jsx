import React from "react";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Experience = ({
  title,
  location,
  content,
  path,
  contentHighlightWord,
}) => {
  return (
    <div className="border p-3 h-[600px] w-full flex flex-col gap-8 ">
      <div className="text-bold">
        {title} <br />
        <span className="text-sm font-extralight italic">{location}</span>
      </div>
      <ul className="w-full flex flex-col gap-2 ">
        {content.map((item) => {
          return (
            <li key={item} className="text-sm/[24px] font-extralight">
              <span className="font-black">· </span>
              {highlightWords(item, contentHighlightWord)}
            </li>
          );
        })}
      </ul>

      {/* project redirect */}
      {path != null ? (
        <div className="flex justify-center">
          <Link target="_blank" href={path} className="text-center">
            <Button
              size="lg"
              className="w-[200px] flex items-center text-lg px-2 hover:bg-bright-darker hover:text-gray-300 font-medium bg-gray-200 text-bright-darker rounded"
            >
              <span>Go Live</span>
              <FaArrowRightLong />
            </Button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const highlightWords = (text, wordsToHighlight) => {
  if (!Array.isArray(wordsToHighlight) || wordsToHighlight.length === 0) {
    return text;
  }
  const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
  return text.split(regex).map((part, index) =>
    wordsToHighlight.includes(part) ? (
      <span key={index} className="font-bold text-bright-darker">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export default Experience;
