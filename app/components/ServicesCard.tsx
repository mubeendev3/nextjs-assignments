import React from "react";

const ServicesCard = () => {
  return (
    <div className="flex gap-6 bg-gray-200 p-7 rounded-lg text-center">
      <div className="flex flex-col items-center bg-white px-6 py-7 w-64 rounded-lg gap-3">
        <span className="bg-teal-600 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <h2 className="text-2xl font-semibold">Photo Shoot</h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white px-6 py-7 w-64 rounded-lg gap-3">
        <span className="bg-teal-600 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </span>
        <h2 className="text-2xl font-semibold">Video Production</h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          doloremque!
        </p>
      </div>
      <div className="flex flex-col items-center bg-white px-6 py-7 w-64 rounded-lg gap-3">
        <span className="bg-teal-600 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </span>
        <h2 className="text-2xl font-semibold">Digital Illustration</h2>
        <p className="mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel harum
          nemo quae mollitia.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
