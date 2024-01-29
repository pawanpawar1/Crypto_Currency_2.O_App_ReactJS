import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 bg-red-700 text-white mt-10 font-extrabold text-3xl">
      <h1>404 - Not Found</h1>
      <p>The requested page could not found.</p>
    </div>
  );
};

export default ErrorPage;
