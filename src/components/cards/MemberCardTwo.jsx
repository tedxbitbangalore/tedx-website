import React from "react";

const MemberCardTwo = ({ names, titles, paths, description }) => {
  return (
    <div className="p-5 w-[85vw] mx-auto border-white border-2 flex flex-col lg:flex-row lg:gap-8 gradient-bg mb-6">
      <div className="order-1 lg:order-none flex flex-col items-center">
        <div className="overflow-hidden rounded-full text-center w-64 h-64 mb-3">
          <img src={paths[0]} alt="" className="relative bottom-10" />
        </div>
        <p className="font-bold">{names[0]}</p>
        <p className="italic">{titles[0]}</p>
      </div>
      <div className="order-3 lg:order-none pt-8">
        <p className="text-justify">{description}</p>
      </div>
      <div className="order-2 lg:order-none lg:mt-0 mt-8 flex flex-col items-center">
        <div className="overflow-hidden rounded-full text-center w-64 h-64 mb-3">
          <img src={paths[1]} alt="" className="relative bottom-10" />
        </div>
        <p className="font-bold">{names[1]}</p>
        <p className="italic">{titles[1]}</p>
      </div>
    </div>
  );
};

export default MemberCardTwo;
