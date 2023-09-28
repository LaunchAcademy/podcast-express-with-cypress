import fs from "fs"

const podcastsPath = "podcasts.json"

class Podcast {
  constructor({ title, description, network }) {
    this.title = title
    this.description = description || "NA"
    this.network = network || "NA"
  }

  static findAll() {
    // const podcastObjects = JSON.parse(fs.readFileSync(podcastsPath)).podcasts

    const podcastFileData = fs.readFileSync(podcastsPath)
    // console.log(podcastFileData);
    const podcastJsonData = JSON.parse(podcastFileData)
    const podcastDataArray = podcastJsonData.podcasts
    // console.log("podcast from findAll", podcastDataArray)

    const podcastObjects = podcastDataArray.map(podcastJson => {
      return new Podcast(podcastJson)
    })

    // console.log("pod objects", podcastObjects)
    return podcastObjects
  }

  save() {
    console.log("THIS podcast", this)
    const allPodcasts = this.constructor.findAll()
    allPodcasts.push(this)
    console.log("all", allPodcasts)
    fs.writeFileSync(podcastsPath, JSON.stringify({ podcasts: allPodcasts }))
  }
}

export default Podcast
