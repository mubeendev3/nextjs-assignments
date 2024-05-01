import React from "react";

const Card = () => {
  return (
    <div>
      <div className="wrapper flex flex-col gap-5 p-10 bg-white rounded-xl w-[350px] ">
        <h1 className="text-3xl font-black text-blue-600">CSS Flex & Grid</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          temporibus nobis expedita suscipit consequuntur aut laborum ab aliquid
          illum. Neque, dolorem soluta inventore, nihil et adipisci sit
          reiciendis modi asperiores quam perspiciatis ipsum ipsa qui ex quo.
          Ipsam autem assumenda excepturi vel obcaecati! Odit commodi, aliquid
          sed vitae totam harum!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-200 px-3 py-1 rounded-md">Prev</button>
          <button className="bg-blue-200 px-3 py-1 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
