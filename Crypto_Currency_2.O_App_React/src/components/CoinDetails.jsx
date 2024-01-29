import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorComp from "../pages/ErrorComp";
import Loader from "../pages/Loader";
import CustomBar from "./data/CustomBar";
import Items from "./data/Items";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      const URL = "https://api.coingecko.com/api/v3";
      try {
        const { data } = await axios.get(`${URL}/coins/${params.id}`);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency]);

  if (error) {
    return <ErrorComp message={"Error while fetching CoinDetails"} />;
  }

  return (
    <div className="max-w-screen-xl bg-amber-800 text-white mx-auto flex flex-col items-center justify-center min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-8">
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

          <div className="p-2">
            <p className="text-sm text-opacity-70 flex justify-center">
              Last Updated On{" "}
              {
                new Date(coin.market_data.last_updated)
                  .toString()
                  .split("GMT")[0]
              }
            </p>

            <img
              src={coin.image.large}
              className="w-20 h-20 object-contain my-4 mx-auto md:mx-52"
              alt={coin.name}
            />

            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-center">{coin.name}</p>
              <p className="text-2xl">
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </p>
              <p className="text-sm">
                <span
                  className={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.market_data.price_change_percentage_24h}%
                </span>
              </p>
              <div className="bg-black text-2xl text-white m-4">
                <p>{`#${coin.market_cap_rank}`}</p>
              </div>
              <CustomBar
                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
              />
              <div className="w-full p-4">
                <Items
                  title={"Max Supply"}
                  value={coin.market_data.max_supply}
                />
                <Items
                  title={"Circulating Supply"}
                  value={coin.market_data.circulating_supply}
                />
                <Items
                  title={"Market Cap"}
                  value={coin.market_data.market_cap[currency]}
                />
                <Items
                  title={"All Time Low"}
                  value={coin.market_data.atl[currency]}
                />
                <Items
                  title={"All Time High"}
                  value={coin.market_data.ath[currency]}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinDetails;
