import React from "react";

const SpeakerCard = ({ name, title, path }) => {
  return (
    <div className="p-5">
      <div className="overflow-hidden h-48 w-48 mx-auto rounded-lg border-ted border-2 hover:border-glow transition-shadow">
        <img className="" src={path} alt="" />
      </div>
      <h5 className="mt-2 lg:text-2xl mx-auto font-bold tracking-tight text-white text-center">
        {name}
      </h5>
      <p className="mb-3 font-normal mx-auto text-ted text-center lg:text-lg">
        {title}
      </p>
    </div>
  );
}

export default SpeakerCard;