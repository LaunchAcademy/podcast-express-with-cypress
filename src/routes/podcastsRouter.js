import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {
  const podcasts = Podcast.findAll()
  // debugger
  res.render("podcasts/index", { podcasts: podcasts })
})

podcastsRouter.get("/new", (req, res) => {
  res.render("podcasts/new")
})

podcastsRouter.post("/", (req, res) => {
  const newPodcast = new Podcast(req.body)
  if (newPodcast.save()) {
    res.redirect("/podcasts")
  } else {
    res.render("podcasts/new")
  }
})

export default podcastsRouter
