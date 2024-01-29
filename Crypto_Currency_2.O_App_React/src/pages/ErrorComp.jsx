import React from "react";

const ErrorComp = ({ message }) => {
  return (
    <div className="bg-red-500 text-white py-2 px-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-96 rounded-md flex items-center">
      <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
      <span>{message}</span>
    </div>
  );
};

export default ErrorComp;
