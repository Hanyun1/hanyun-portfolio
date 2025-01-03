"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten
        relative overflow-hidden rounded-full"
      >
        <Image
          src="/profile.jpeg"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Photo;
