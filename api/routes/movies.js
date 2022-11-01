const express= require("express")
const router= express.Router()
const MoviesCtrl= require("../controllers/movies")

router.get('/popular', MoviesCtrl.getPopMovies)
router.get('/search', MoviesCtrl.searchMovies)
router.get('/bygenre/:id', MoviesCtrl.getMovieByGenre)
router.get('/genres', MoviesCtrl.getGenres)
router.get('/top', MoviesCtrl.topRatep)

module.exports= router