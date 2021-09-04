import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Chart from './Chart';

const CryptoData = () => {
  const { id } = useParams();
  const [cryptoData, setCryptoData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      )
      .then((res) => {
        setCryptoData(formatData(res.data.prices));
        console.log(formatData(res.data.prices));
      })
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Chart data={cryptoData} id={id} />
      </div>
    );
  };

  return renderData();
};

export default CryptoData;
