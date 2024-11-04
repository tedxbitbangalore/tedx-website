import React from "react";

const MemberCard = ({ name, title, path, description }) => {
  return (
    <div className="p-5 w-[85vw] mx-auto border-white border-2 flex flex-col lg:flex-row lg:gap-8 gradient-bg mb-6">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full text-center w-64 h-64 mb-3">
          <img src={path} alt="" />
        </div>
        <p className="font-bold">{name}</p>
        <p className="italic">{title}</p>
      </div>
      <div className="pt-8">
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
