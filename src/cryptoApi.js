import dotenv from 'dotenv';

dotenv.config();

const bitcoin = fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

const ethereum = fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

const xrp = fetch('https://rest.coinapi.io/v1/exchangerate/XRP/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

export { bitcoin, ethereum, xrp };
