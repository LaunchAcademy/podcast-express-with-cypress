import fs from "fs"

const podcastsPath = "podcasts.json"


class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description || "NA"
    this.network = network || "NA"
  }

  static findAll() {
    // retrieve the json data from the podcast.json file
    const podcastJSON = fs.readFileSync(podcastsPath)
    const parsedJSON = JSON.parse(podcastJSON)
    // .podcasts accesses the "podcasts" property of the data to get at the array
    const arrayOfPodcasts = parsedJSON.podcasts
    console.log(arrayOfPodcasts)
    const formalPodcastArray = arrayOfPodcasts.map((podcastObject) => {
      return new Podcast(podcastObject)
    })

    return formalPodcastArray
  }

  save() {
    // retrieve the existing podcasts
    const existingPodcasts = Podcast.findAll()
    // add "this" podcast to that list of podcasts 
    existingPodcasts.push(this)
    // write the new array of podcasts to the JSON file
    const newPodcastData = { podcasts: existingPodcasts }
    fs.writeFileSync(podcastsPath, JSON.stringify(newPodcastData))
  }
}

export default Podcast