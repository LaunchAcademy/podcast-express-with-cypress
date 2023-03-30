import express from "express"

import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

// /podcasts
podcastsRouter.get("/", (req, res) => {
  const arrayOfPodcastObjects = Podcast.findAll()
  console.log(arrayOfPodcastObjects)

  res.render("podcasts/index", { podcasts: arrayOfPodcastObjects })
})

podcastsRouter.get("/new", (req, res) => {
  res.render("podcasts/form")
})

podcastsRouter.post("/create", (req, res) => {
  // console.log(req.body)
  debugger
  if (req.body.title.trim() === "") {

    res.render("podcasts/form")
  } else {
    const newPodcast = new Podcast(req.body)

    newPodcast.save()

    // if we dont redirect or render, then there will be a blank page displayed
    res.redirect("/podcasts")
  }
})

// File Paths 
// 


// new route 



// POST route
// retrieve data from params

// persist the new record 

// determine whether we want to re-render or redirect



export default podcastsRouter
