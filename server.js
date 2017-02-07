require('isomorphic-fetch');
const express = require('express');
// I'm using the combyn templating engine due to
// it's simplicity, but you could use anything really.
const combynExpress = require('combynexpress');


// This is duplicated in FE code, should be isomorphic
function httpService(url) {
  return fetch(url)
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    });
}

// Some config shit
const app = express();
app.engine('html', combynExpress());
app.set('views', __dirname + '/build');
app.set('view engine', 'html');
app.use(express.static('build'));

// Routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
app.get('/blog', (req, res) => {
  res.render('index', { title: 'Blog' });
});
app.get('/blog/:article', (req, res) => {
  httpService(`//offline-news-api.herokuapp.com/stories/${req.params.article}`)
  .then(article => {
    res.render('index', { title: article.title });
  });
});
app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact' });
});

// Drop it like it's hot
app.listen(3000);
console.log('Listening on http://localhost:3000');
