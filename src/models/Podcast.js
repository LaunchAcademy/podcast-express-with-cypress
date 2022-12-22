import fs from "fs"

const podcastsPath = "podcasts.json"


class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description || "NA"
    this.network = network || "NA"
  }

  static findAll() {
    const JSONVersionOfPodcasts = fs.readFileSync(podcastsPath)
    const parsedPodcasts = JSON.parse(JSONVersionOfPodcasts)

    const formalPodcastObjects = parsedPodcasts.podcasts.map((podcastObject) => {
      return new Podcast(podcastObject)
    })
    return formalPodcastObjects
  }

  save() {

    if (this.title.trim() === "") {
      return false
    } else {
      // this = { title: this.title, description: this.description, network: this.network }
      const podcastObjects = Podcast.findAll()
      podcastObjects.push(this)

      const podcastDataToAddToJSONFile = {
        podcasts: podcastObjects
      }

      fs.writeFileSync(podcastsPath, JSON.stringify(podcastDataToAddToJSONFile))
      return true
    }
  }
}

export default Podcast