import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

// localhost:3000/podcasts
podcastsRouter.get("/", (req, res) => {
  const podcasts = Podcast.findAll()
  // console.log("podcasts in router", podcasts)

  res.render("podcasts/index", { podcasts: podcasts })
})

// new route

podcastsRouter.get("/new", (req, res) => {
  res.render("podcasts/new")
})

// POST /podcasts
podcastsRouter.post("/", (req, res) => {
  console.log(req.body)
  req.body.title
  if (req.body.title) {
    // happy path
    const newPodcast = new Podcast(req.body)
    console.log(newPodcast)
    newPodcast.save()
    res.redirect("/podcasts")
  } else {
    // no title provided
    res.render("podcasts/new")
  }
})

// POST route
// retrieve data from params

// persist the new record

// determine whether we want to re-render or redirect

export default podcastsRouter
