import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ data, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coins/${data.id}`}>
      <div className=" bg-white w-52 h-50 flex flex-col items-center justify-center shadow-lg p-8 rounded-lg transition-all duration-100 m-4 hover:scale-110">
        <img
          src={data.image}
          className="w-30 h-20 object-contain"
          alt="Exchanges"
        />
        <h2 className="text-md font-semibold truncate">{data.symbol}</h2>
        <p className="truncate">{data.name}</p>
        <p className="truncate">
          {data.current_price ? `${currencySymbol}${data.current_price}` : "NA"}
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
