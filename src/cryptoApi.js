import dotenv from 'dotenv';

dotenv.config();

const bitcoinPrice = document.createElement('div');
const ethereumPrice = document.createElement('div');
const xrpPrice = document.createElement('div');

fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => bitcoinPrice.append(data.rate))
  .catch((error) => console.error('Error:', error));

fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => ethereumPrice.append(data.rate))
  .catch((error) => console.error('Error:', error));

fetch('https://rest.coinapi.io/v1/exchangerate/XRP/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => xrpPrice.append(data.rate))
  .catch((error) => console.error('Error:', error));

export { bitcoinPrice, ethereumPrice, xrpPrice };
