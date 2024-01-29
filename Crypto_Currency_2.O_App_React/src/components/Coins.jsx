import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";
import ErrorComp from "../pages/ErrorComp";
import Loader from "../pages/Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const buttons = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoinsData = async () => {
      const URL = "https://api.coingecko.com/api/v3";
      try {
        const { data } = await axios.get(
          `${URL}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoinsData();
  }, [currency, page]);

  if (error) {
    return <ErrorComp message={"Error while fetching coins"} />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="p-8">
            <div className="flex space-x-4">
              <input
                type="radio"
                className="form-radio text-blue-500"
                value="inr"
                checked={currency === "inr"}
                onChange={() => setCurrency("inr")}
              />
              <label className="text-black">INR</label>

              <input
                type="radio"
                className="form-radio text-blue-500"
                value="usd"
                checked={currency === "usd"}
                onChange={() => setCurrency("usd")}
              />
              <label className="text-black">USD</label>

              <input
                type="radio"
                className="form-radio text-blue-500"
                value="eur"
                checked={currency === "eur"}
                onChange={() => setCurrency("eur")}
              />
              <label className="text-black">EUR</label>
            </div>
          </div>

          <div className="flex flex-wrap justify-center bg-stone-700">
            {coins.map((coin) => (
              <CoinCard
                data={coin}
                key={coin.id}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>

          <div className="flex w-full overflow-auto p-4 md:p-8">
            {buttons.map((ele, index) => (
              <button
                key={index}
                className="bg-black text-white px-4 py-2 mr-2 mb-2 md:mb-0"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
