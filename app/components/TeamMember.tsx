import Image from "next/image";
import React from "react";

const TeamMember = () => {
  return (
    <div>
      <div className="flex gap-10 bg-white p-8 rounded-2xl">
        <div className="text-center flex flex-col items-center">
          <Image
            src="/1.jpg"
            alt="Dp"
            width={1000}
            height={667}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="font-bold">Alexa Kardi</h2>
          <p className="font-light tracking-tighter">Founder and CEO</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <Image
            src="/2.jpg"
            alt="Dp"
            width={1000}
            height={667}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="font-bold"> Tavell Monroe </h2>
          <p className="font-light tracking-tighter">Web Developer</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <Image
            src="/33.jpg"
            alt="Dp"
            width={1000}
            height={667}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="font-bold">Adale Smith</h2>
          <p className="font-light tracking-tighter">Marketing Specialist</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <Image
            src="/4.jpg"
            alt="Dp"
            width={1000}
            height={667}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="font-bold">Thomas Mason</h2>
          <p className="font-light tracking-tighter">UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
