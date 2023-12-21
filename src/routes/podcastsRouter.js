import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {
  const podcasts = Podcast.findAll()

  res.render("podcasts/index", { podcasts: podcasts })
})

// new route 
podcastsRouter.get("/new", (req, res) => {
  res.render("podcasts/new")
})

// POST route
podcastsRouter.post("/ILickedEverything", (req, res) => {
  const podcast = new Podcast(req.body)

  if (podcast.save() === true)  {
    res.redirect("/podcasts")
  } else {
    res.render("podcasts/new")
  }
})

// https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png
// retrieve data from params

// persist the new record 

// determine whether we want to re-render or redirect



export default podcastsRouter
