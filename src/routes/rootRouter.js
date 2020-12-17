import express from "express"
import podcastsRouter from "./podcastsRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.send("Hello there!.  You have reached '/'.")
})

rootRouter.use("/podcasts", podcastsRouter)

export default rootRouter
