import React from 'react';
import { useParams } from 'react-router-dom';

const Chart = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Chart;
