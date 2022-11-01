const express= require("express")
const router= express.Router()
const TvShowsCtrl= require("../controllers/tvshows")

router.get('/popular', TvShowsCtrl.getPopTvShows)
router.get('/:id', TvShowsCtrl.getTvDetails)
router.get('/genres', TvShowsCtrl.getTvGenres)

module.exports= router