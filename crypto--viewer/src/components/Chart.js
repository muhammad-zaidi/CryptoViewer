import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';
import axios from 'axios';

const Chart = ({ data, id }) => {
  const chartRef = useRef();
  const [detail, setDetail] = useState([]);
  const cryptoData = data;
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: `${id} price over the past year`,
              data: data,
              backgroundColor: 'rgba(172, 229, 238, 0.5)',
              borderColor: 'rgba(0, 0, 0, 0.5',
              pointRadius: 0,
            },
          ],
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
          },

          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: 'time',
                distribution: 'linear',
              },
            ],
          },
        },
      });
    }
  });
  return (
    <div>
      <canvas ref={chartRef} id='myChart' height={750} width={250}></canvas>
    </div>
  );
};

export default Chart;
