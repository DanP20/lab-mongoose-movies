const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movies');

router.get('/movies/new', (req, res) => {
  Celebrity.find().then((celebfromDB) => {
    res.render('movies/newMovie', {
      celebList: celebfromDB,
    });
  });
});

router.post('/movies', (res, req) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({
    title: title,
    genre: genre,
    plot: plot,
    cast: cast,
  })
    .then((movies) => {
      console.log(`these should be movies: ${movies}`);
      res.redirect();
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
