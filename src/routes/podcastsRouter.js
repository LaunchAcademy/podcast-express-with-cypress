import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {
  const podcasts = Podcast.findAll()

  res.render("podcasts/index", { podcasts: podcasts })
})

// new route 


// POST route


export default podcastsRouter
