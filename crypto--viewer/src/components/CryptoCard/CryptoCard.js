import React from 'react';
import './CryptoCard.css';
import { Link } from 'react-router-dom';

const CryptoCard = ({
  key,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <div className='CryptoCard'>
      <img src={image} alt={`${name}`} className='cryptoLogo' />
      <div className='cryptoNameWrap'>
        <h1 className='cryptoName'>{name}</h1>
        <p className='cryptoSymbol'>{symbol.toUpperCase()}</p>
      </div>
      <p className='cryptoPrice'>${price.toLocaleString()}</p>
      <p className='cryptoMC'>Market Cap: ${marketcap.toLocaleString()}</p>
      <p className='cryptoVolume'>Volume (24H): ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className='priceContainerDOWN'>
          <i className='fas fa-angle-down fa-2x'></i>
          <p className='priceChange'>{priceChange.toFixed(2)}%</p>
          <Link to={`/crypto/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ) : (
        <div className='priceContainerUP'>
          <i className='fas fa-angle-up fa-2x'></i>
          <p className='priceChange'>{priceChange.toFixed(2)}%</p>
          <Link to={`/crypto/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
