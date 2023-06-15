import React from "react";

function Perk({ title, sub, icon }) {
  return (
    <div className="flex flex-row">
      <img
        src={icon}
        alt=""
      />

      <div className="flex flex-col  pr-4">
        <p className="font-DanaMedium flex-nowrap text-lg min-w-fit text-center min-h-[5rem] items-center justify-center flex">{title}</p>
        <br />
        <p className="font-Dana text-sm text-justify">{sub}</p>
      </div>
    </div>
  );
}

export default Perk;
