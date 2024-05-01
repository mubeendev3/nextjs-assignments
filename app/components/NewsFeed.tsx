import React from "react";

const NewsFeed = () => {
  return (
    <div>
      <div className="bg-gray-100 p-10 rounded-xl">
        <div className="text-white border border-gray-400 rounded-md tracking-tight">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="font-light py-2 pl-3 pr-8 rounded-l-md"
          />
          <button
            type="submit"
            className="py-2 px-4 rounded-l-sm bg-teal-700 rounded-r-md"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
