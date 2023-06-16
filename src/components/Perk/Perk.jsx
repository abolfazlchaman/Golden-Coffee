import React from "react";

function Perk({ title, sub, icon }) {
  return (
    <div className="flex flex-row items-start w-5/12 2xl:w-1/5">
    <div className="flex items-start justify-center">

      <img
      className="h-12 w-12"
        src={icon}
        alt=""
      />
    </div>

      <div className="flex flex-col pr-4 w-full">
        <p className="w-full font-DanaMedium flex-nowrap text-lg min-w-fit min-h-[3rem] items-center justify-start flex">{title}</p>
        <br />
        <p className="font-Dana text-sm text-justify">{sub}</p>
      </div>
    </div>
  );
}

export default Perk;
