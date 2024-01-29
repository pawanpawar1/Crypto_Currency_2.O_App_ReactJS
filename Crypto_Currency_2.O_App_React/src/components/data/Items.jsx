import React from "react";

const Items = ({ title, value }) => {
  return (
    <div className="flex justify-between w-full m-4">
      <span className="font-bebas font-semibold tracking-widest">{title}</span>
      <span className="ml-22 ">{value}</span>
    </div>
  );
};

export default Items;
