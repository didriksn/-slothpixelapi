const request = require('request');

request('https://api.slothpixel.me/api/skyblock/bazaar/ENCHANTED_ACACIA_LOG', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(res["body"]["sell_summary"][29]["pricePerUnit"]);
});