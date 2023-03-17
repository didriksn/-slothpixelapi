const request = require('request');

request('https://api.slothpixel.me/api/skyblock/bazaar/ENCHANTED_ACACIA_LOG', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }

  let lowestSellOfferThatShowsUpInTheSellSummaryObject = res["body"]["sell_summary"].length - 1; // -1 because array indexes start at 0

  console.log(res["body"]["sell_summary"].slice(lowestSellOfferThatShowsUpInTheSellSummaryObject - 5, lowestSellOfferThatShowsUpInTheSellSummaryObject));
});
