import express from 'express';
import axios from 'axios';
import cors from 'cors';
const proxyServer = express();
const PORT = 4000;
const apiKey = '98e9a8a4-90d3-4416-833b-2601c5c66a8e';

proxyServer.use(cors());

proxyServer.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest',
    headers: {
      'X-CMC_PRO_API_KEY': apiKey,
    },
    params: {
      slug: 'bitcoin,ethereum,chainlink,tezos',
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

proxyServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
