/// <reference types="cypress" />

import newPodcast from "../../fixtures/newPodcast.json"
import initialPodcasts from "../../fixtures/initialPodcasts.json"

const podcastsFilePath = "podcasts.json"

describe("when filling out the form on the new podcast page", () => {
  beforeEach(() => {
    cy.visit("/podcasts/new")
  })

  it("has a header displaying the text 'Add a Podcast Here!'", () => {
    cy.get("h1").should("have.text", "Add a Podcast Here!")
  })

  it("displays a link back to the podcasts index page", () => {
    cy.get("a")
      .should("have.text", "Podcasts Home Page")
      .should("have.attr", "href", "/podcasts")
  })

  it("creates a new list item when the form is submitted correctly", () => {
    cy.get("#title")
      .type(newPodcast.podcast.title)
      .should("have.value", newPodcast.podcast.title)

    cy.get("#description")
      .type(newPodcast.podcast.description)
      .should("have.value", newPodcast.podcast.description)

    cy.get("#network")
      .type(newPodcast.podcast.network)
      .should("have.value", newPodcast.podcast.network)

    cy.get("form").submit()

    cy.url().should("eq", "http://localhost:3000/podcasts")

    cy.get("li")
      .last()
      .should("have.text", `${newPodcast.podcast.title}`)
  })

  it("remains on the new podcast form page if the form is submitted without a title", () => {
    cy.get("form").submit()
    cy.get("h1").should("have.text", "Add a Podcast Here!")
  })

  it("does not add an empty li element to the index page if the form is submitted without a name", () => {
    cy.get("form").submit()

    cy.visit("/podcasts")

    cy.get("li")
      .last()
      .should("not.have.text", "")
  })

  afterEach(() => {
    cy.writeFile(podcastsFilePath, JSON.stringify(initialPodcasts))
  })
})
