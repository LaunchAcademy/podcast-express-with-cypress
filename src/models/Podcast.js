import fs from "fs"

const podcastsPath = "podcasts.json"

// const podcastObjects = JSON.parse(fs.readFileSync(podcastsPath)).podcasts

class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description 
    this.network = network 
  }

  static findAll() {

  }

  save() {

  }
}

export default Podcast