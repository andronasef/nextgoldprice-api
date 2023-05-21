const axios = require('axios');
const cheerio = require('cheerio');

const getEgGoldPrices = async (req, res) => {
  const gold_prices = [];

  axios
    .get('https://egypt.gold-price-today.com')
    .then((response) => {
      const $ = cheerio.load(response.data);
      const rows = $('table').first().find('tr').slice(1, -1);

      rows.each((index, row) => {
        const goldtype = $(row).find('th').text();
        const price = $(row).find('td').text().split(' ');
        const buy = price[3];
        const sell = price[1];

        gold_prices.push({
          type: goldtype,
          buy: buy,
          sell: sell,
        });
      });

      return res.status(200).json(gold_prices);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};

module.exports = getEgGoldPrices;
