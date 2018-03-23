const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

module.exports = function (app) {


  app.get("/scrape", function (req, res) {
    axios.get("https://www.theverge.com/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      $('.c-entry-box--compact__title').each(function (i, element) {
        let result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');

        db.Article.create(result).then(data => {
          console.log(data);
        }).catch(err => {
          return res.json(err);
        })
      });


    });


  });


}
