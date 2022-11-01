const express= require("express")
const router= express.Router()

const user= require("./user")
const movies= require("./movies")
const tvshows= require("./tvshows")

router.use("/", user)
router.use("/movie", movies)
router.use("/tv", tvshows )


module.exports= router