import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {
  const podcasts = Podcast.findAll()

  res.render("podcasts/index", { podcasts: podcasts })
})

// new route 



// POST route
// retrieve data from params

// persist the new record 

// determine whether we want to re-render or redirect



export default podcastsRouter
