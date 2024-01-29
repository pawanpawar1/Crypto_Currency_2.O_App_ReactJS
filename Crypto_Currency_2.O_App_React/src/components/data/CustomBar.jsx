import React from "react";

const CustomBar = ({ high, low }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-teal-500 my-1">
        <div className="h-4 w-1/2 bg-teal-600"></div>
      </div>
      <div className="flex justify-between w-full">
        <span className="px-2 py-1 bg-red-500 rounded">{low}</span>
        <span className="text-sm">24H Range</span>
        <span className="px-2 py-1 bg-green-500 rounded">{high}</span>
      </div>
    </div>
  );
};

export default CustomBar;
