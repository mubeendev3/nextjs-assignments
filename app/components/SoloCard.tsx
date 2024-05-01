import Image from "next/image";
import React from "react";

const SoloCard = () => {
  return (
    <div className="flex gap-3 bg-white px-8 py-5 rounded-2xl">
      <Image
        src="/1.jpg"
        alt="Dp"
        width={1000}
        height={667}
        className="rounded-full w-24 h-24 object-cover"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-bold">Alexa Kardi</h2>
        <p className="font-light tracking-tighter">Founder and CEO</p>
      </div>
    </div>
  );
};

export default SoloCard;
