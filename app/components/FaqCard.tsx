import React from "react";

const FaqCard = () => {
  return (
    <div className="flex flex-col gap-6 bg-white p-6 rounded-xl items-center w-[500px]">
      <div className="text-3xl font-bold">
        <span className="text-red-600">Frequent</span> Questions
      </div>
      <div className="flex gap-5 items-start">
        <span className="bg-red-600 px-4 py-2 rounded font-black text-white">
          1
        </span>
        <div>
          <h1 className="font-bold">Whom is this event intended for?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iure neque nulla laudantium eius cumque, fuga molestias quos totam
            asperiores.
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-start">
        <span className="bg-red-600 px-4 py-2 rounded font-black text-white">
          2
        </span>
        <div>
          <h1 className="font-bold">
            Why should I come maybe it&apos;s waste of time?
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iure neque nulla laudantium eius cumque, fuga molestias quos totam
            asperiores.
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-start">
        <span className="bg-red-600 px-4 py-2 rounded font-black text-white">
          3
        </span>
        <div>
          <h1 className="font-bold">
            Any restrictions that I should be aware of?
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iure neque nulla laudantium eius cumque, fuga molestias quos totam
            asperiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
