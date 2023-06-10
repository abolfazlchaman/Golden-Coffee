import React from "react";

function Perk({ title, sub, icon }) {
  return (
    <div className="flex flex-row">
      <img
        src={icon}
        alt=""
      />

      <div className="flex flex-col">
        <p>{title}</p>
        <p>{sub}</p>
      </div>
    </div>
  );
}

export default Perk;
