/// <reference types="cypress" />
import initialPodcasts from "../../fixtures/initialPodcasts.json"

context("Podcasts Index", () => {
  it("navigating to the root will redirect to the index page", () => {
    cy.visit("/")

    cy.url().should("eq", "http://localhost:3000/podcasts")
  })

  it("has a header", () => {
    cy.visit("/podcasts")
    cy.get("h1").should("have.text", "Our Favorite Podcasts")
  })

  it("lists all podcasts", () => {
    cy.visit("/podcasts")

    cy.get("ul")
      .find("li")
      .should("have.length", 5)

    cy.get("ul")
      .find("li")
      .first()
      .should("have.text", `${initialPodcasts.podcasts[0].title}`)

    cy.get("ul")
      .find("li")
      .last()
      .should("have.text", `${initialPodcasts.podcasts[4].title}`)
  })

  it("has a link to go to the new podcast form", () => {
    cy.visit("/podcasts")

    cy.get("a")
      .should("have.text", "Add a new Podcast")
      .click()

    cy.url().should("eq", "http://localhost:3000/podcasts/new")
  })
})
