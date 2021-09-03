import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CryptoCard from './components/CryptoCard/CryptoCard';

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCrypto(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCrypto = crypto.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='header'>
        <h1 className='brand'>
          <i className='fas fa-coins'></i> Crypto Viewer
        </h1>
        <form>
          <input
            className='search'
            type='text'
            onChange={handleChange}
            placeholder='Search for a CryptoCurrency'
          />
        </form>
      </div>
      <div className='CryptoContainer'>
        {filteredCrypto.map((crypto) => {
          return (
            <CryptoCard
              key={crypto.id}
              name={crypto.name}
              price={crypto.current_price}
              symbol={crypto.symbol}
              marketcap={crypto.market_cap}
              volume={crypto.total_volume}
              image={crypto.image}
              priceChange={crypto.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
