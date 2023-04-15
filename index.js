const request = require('request');
const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();




app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

request('https://api.slothpixel.me/api/skyblock/bazaar/ENCHANTED_ACACIA_LOG', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  let lowestSellOfferThatShowsUpInTheSellSummaryObject = 5;
  let arr = res["body"]["sell_summary"].slice(0, lowestSellOfferThatShowsUpInTheSellSummaryObject);

  app.get("/", (req, res) => {
    res.render("index", {name: arr});
  })});


app.listen(3000, () => {
  console.log("Server running on port 3000")
});



// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/home.html'));
// });

// app.use('/', router);
// app.listen(process.env.port || 3000);
 
// console.log('Running at Port 3000');








