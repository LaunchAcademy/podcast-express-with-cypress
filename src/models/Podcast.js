import fs from "fs"

const podcastsPath = "podcasts.json"

// const podcastObjects = JSON.parse(fs.readFileSync(podcastsPath)).podcasts

class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description || "NA"
    this.network = network || "NA"
  }

  static findAll() {

  }

  save() {

  }
}

export default Podcast