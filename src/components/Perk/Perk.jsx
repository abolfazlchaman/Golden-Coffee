import React from "react";

function Perk({ title, sub, icon }) {
  return (
    <div className="flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center items-start w-5/12 2xl:w-1/5">
      <div className="flex items-start justify-center">
        <img
          className="h-12 w-12"
          src={icon}
          alt=""
        />
      </div>

      <div className="flex flex-col lg:pr-4 w-full ">
        <p className="w-full font-DanaMedium max-lg:text-xs lg:flex-nowrap lg:text-lg min-w-fit lg:min-h-[3rem]  items-center justify-start flex max-lg:items-center max-lg:justify-center max-lg:pt-4">
          {title}
        </p>
        <br />
        <p className="font-Dana text-sm text-justify max-lg:items-center max-lg:text-xs max-lg:justify-center max-lg:text-center">
          {sub}
        </p>
      </div>
    </div>
  );
}

export default Perk;
