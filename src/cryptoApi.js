import dotenv from 'dotenv';

dotenv.config();

const bitcoinData = document.createElement('div');

const bitcoin = fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
    'X-CoinAPI-Key': process.env.cryptoPriceApiKey,
  },
})
  .then((response) => response.json())
  .then((data) => bitcoinData.append(data.rate))
  .catch((error) => console.error('Error:', error));

export { bitcoinData };
