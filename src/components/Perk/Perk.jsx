import React from "react";

function Perk({ title, sub, icon }) {
  return (
    <div className="flex flex-row">
      <img
        src={icon}
        alt=""
      />

      <div className="flex flex-col  pr-4">
        <p className="font-DanaMedium flex-nowrap text-lg min-w-fit">{title}</p>
        <p className="font-Dana text-sm">{sub}</p>
      </div>
    </div>
  );
}

export default Perk;
