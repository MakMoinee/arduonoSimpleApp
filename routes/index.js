var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

/* GET home page. */
router.get("/sensordataget", function (req, res, next) {
  console.log(req.query);
  fetch(
    "https://aqmrefresh.com/storeget.php?api_key=" +
      req.query.api_key +
      "&voc_value=" +
      req.query.voc_value +
      "&carbon_value=" +
      req.query.carbon_value +
      ""
  )
    .then((response) => response.text())
    .then((body) => {
      res.send(body);
    });

});

module.exports = router;
