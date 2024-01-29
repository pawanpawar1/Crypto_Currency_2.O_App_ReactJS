// Exchanges.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComp from "../pages/ErrorComp";
import Loader from "../pages/Loader";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchangeData = async () => {
      const URL = "https://api.coingecko.com/api/v3";
      try {
        const { data } = await axios.get(`${URL}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchangeData();
  }, []);

  if (error) {
    return <ErrorComp message={"Error while fetching exchanges"} />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-evenly">
          {exchanges.map((exchange) => (
            <ExchangeCard data={exchange} key={exchange.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
