import fs from "fs"

const podcastsPath = "podcasts.json"

// const podcastObjects = JSON.parse(fs.readFileSync(podcastsPath)).podcasts

class Podcast {
  constructor({ title, description = "NA", network = "NA" }) {
    this.title = title
    this.description = description 
    this.network = network 
  }

  static findAll() {
    const podcastData = JSON.parse(fs.readFileSync(podcastsPath))
    const podcastsArray = podcastData.podcasts.map(podcastObject => {
      return new Podcast(podcastObject)
    })
    return podcastsArray
  }

  save() {
    if (this.title.trim() !== "") {
      const podcasts = this.constructor.findAll()
      podcasts.push(this)
      fs.writeFileSync(podcastsPath, JSON.stringify({podcasts: podcasts}))
      return true
    } else {
      return false
    }
  }
}

export default Podcast