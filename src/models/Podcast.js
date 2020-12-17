import fs from "fs"

const podcastsPath = "podcasts.json"

class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description || "NA"
    this.network = network || "NA"
  }
  static findAll() {
    const podcastObjects = JSON.parse(fs.readFileSync(podcastsPath)).podcasts
    let podcastData = []
    podcastObjects.forEach(podcast => {
      const newPodcast = new Podcast(podcast)
      podcastData.push(newPodcast)
    })
    // debugger
    return podcastData
  }

  save() {
    // debugger
    if (this.title.trim().length > 0) {
      const podcasts = this.constructor.findAll()
      podcasts.push(this)
      fs.writeFileSync(podcastsPath, JSON.stringify({ podcasts: podcasts }))
      return true
    } else {
      return false
    }
  }
}

export default Podcast
