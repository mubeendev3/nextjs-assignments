import Image from "next/image";
import React from "react";

const OppositeCard = () => {
  return (
    <div>
      <div className="bg-white w-[550px] p-7 rounded-2xl flex flex-col gap-10">
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src="/1.jpg"
              alt="Dp"
              width={1000}
              height={667}
              className="w-40 h-40 object-cover"
            />
            <div>
              <h2 className="font-bold">Alexa Kardi</h2>
              <p className="font-light tracking-tighter">Founder and CEO</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                minus cumque voluptatem accusantium assumenda libero.
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div className="flex gap-4 items-center flex-row-reverse text-right">
            <Image
              src="/4.jpg"
              alt="Dp"
              width={1000}
              height={667}
              className="w-40 h-40 object-cover"
            />
            <div>
              <h2 className="font-bold">Alexa Kardi</h2>
              <p className="font-light tracking-tighter">Web Developer</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                minus cumque voluptatem accusantium assumenda libero.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OppositeCard;
