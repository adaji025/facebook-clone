import React from "react";
import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 overflow-x-hidden cursor-pointer p-3 trasition duration-200
    transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        width={40}
        height={40}
        src={src}
        className="rounded-full absolute top-10 opacity-0 lg:opacity-100 z-10"
        layout="fixed"
      />
      <Image
        src={src}
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
