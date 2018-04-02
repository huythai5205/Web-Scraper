const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.sendFile('index.html');
  });
  app.get("/api/scrape", function (req, res) {
    let articles = [];
    axios.get("https://www.theverge.com/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      $('.c-entry-box--compact__title').each(function (i, element) {
        let result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');

        articles.push(result);

      });
      res.json(articles);
    });
  });

  app.post('/api/article', (req, res) => {
    db.Article.create(req.body.article).then(data => {
      res.json(data);
    }).catch(err => {
      return res.json(err);
    });
  });

  app.get("/api/articles", (req, res) => {
    db.Article.find({}).then((data) => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    });
  });

  app.get("/api/article/:id", (req, res) => {
    db.Article.findOne({
      _id: req.params.id
    }).populate("note").then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    });
  });

  app.post("/api/article/:id", (req, res) => {
    console.log(req.body);
    db.Note.create(req.body).then(dbNote => {
      return db.Article.findByIdAndUpdate({
        _id: req.params.id
      }, {
        note: dbNote.id
      }, {
        new: true
      });
    }).then(dbArticle => {
      res.json(dbArticle);
    }).catch(err => {
      res.json(err);
    });
  });

  app.delete('/api/article/:id', (req, res) => {
    db.Article.remove({
      _id: req.params.id
    }).then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    });
  });

  app.delete('/api/note/:id', (req, res) => {
    db.Note.remove({
      _id: req.params.id
    }).then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    });
  });
}
