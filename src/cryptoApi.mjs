import fetch from 'node-fetch';

import dotenv from 'dotenv';

dotenv.config();

fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
headers: {
    "X-CoinAPI-Key": process.env.cryptoPriceApiKey,
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));