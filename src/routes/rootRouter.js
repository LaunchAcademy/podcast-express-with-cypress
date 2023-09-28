import express from "express"
import podcastsRouter from "./podcastsRouter.js"

const rootRouter = new express.Router()

// localhost:3000/podcasts
rootRouter.get("/", (req, res) => {
  res.redirect("/podcasts") // a new URL path
})
// POST /podacts
rootRouter.use("/podcasts", podcastsRouter)

export default rootRouter
