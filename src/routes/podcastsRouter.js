import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {

  const podcastsFromJSONFile = Podcast.findAll()
  res.render("podcasts/index", { podcasts: podcastsFromJSONFile })
})

podcastsRouter.get("/new", (req, res) => {
  res.render("podcasts/new")
})

podcastsRouter.post("/", (req, res) => {
  const podcastFormData = req.body
  // podcastFormData ~> {title: title from the form, description: desc from the form, network: network from the form}

  const newPodcast = new Podcast(podcastFormData)
  if (newPodcast.save() === true) {
    res.redirect("/podcasts")
  } else {
    res.render("podcasts/new")
  }
})

// new route 



// POST route
// retrieve data from params

// persist the new record 

// determine whether we want to re-render or redirect



export default podcastsRouter
