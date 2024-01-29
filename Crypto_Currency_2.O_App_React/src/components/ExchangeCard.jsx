import React from "react";

const ExchangeCard = ({ data }) => {
  return (
    <a href={data.url} target="_blank">
      <div className="w-52 h-50 flex flex-col items-center justify-center shadow-lg p-8 rounded-lg transition-all duration-100 m-4 hover:scale-110 bg-white">
        <img
          src={data.image}
          className="w-10 h-10 object-contain mb-2"
          alt="Exchanges"
        />
        <h2 className="text-md font-semibold truncate text-center mb-2">
          {data.rank}
        </h2>
        <p className="truncate text-center">{data.name}</p>
      </div>
    </a>
  );
};

export default ExchangeCard;
