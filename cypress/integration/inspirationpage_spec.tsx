import { createYield } from "typescript";

describe("Load Inspiration page and render the necessary elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
      .get("button.landing-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/inspiration");
  });
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the logo", () => {
    cy.get("div.big-logo").should("be.visible");
  });
  it("Should be able to visit the page and render the inspiration div", () => {
    cy.get("div.contents").should("be.visible");
  });
  it("Should be able to visit the page and render the image div", () => {
    cy.get("div.image-box").should("be.visible");
  });
  it("Should be able to visit the page and see first random image", () => {
    cy.get("div.image-box").get("img").should("have.attr", "src");
  });
  it("Should be able to visit the page and click reinspire to change the image again", () => {
    cy.get("button")
      .first()
      .next()
      .click()
      .get("div.image-box")
      .get("img")
      .should("have.attr", "src");
  });
  it("Should be able to visit the page and render the word div", () => {
    cy.get("div.word-box").should("be.visible");
  });
  it("Should be able to visit the page and show a word in the word div", () => {
    cy.get("div.word-box").get("p");
  });
  it("Should be able to visit the page and render the color div", () => {
    cy.get("div.color-box").should("be.visible");
  });
  it("Should be able to visit the page and render the hexcode", () => {
    cy.get("p.hexcode").should("be.visible");
  });
  it("Should be able to check 'This Inspires Me' checkboxes", () => {
    cy.get("div.image-box").get("[type='checkbox']").check();
  });
  // it("Should be able to uncheck 'This Inspires Me' checkboxes", () => {
  //   cy.get("div.image-box")
  //     .get("[type='checkbox']")
  //     .check()
  //     .get("div.image-box")
  //     .get("[type='checkbox']")
  //     .uncheck();
  // });
  // it("Should render 'Save Inspiration', 'Reinspire', and 'See all Favorites' button", () => {
  //   cy.get("button").siblings();
  //   cy.get("button").first().contains("Save Inspiration");
  //   cy.get("button").first().next().contains("Reinspire");
  //   cy.get("button").last().contains("See My Inspirations");
  // });
  it("Should be able to click pencil button and go to canvas page", () => {
    cy.get(".pencil-img")
    .click()
    .url()
    .should("eq","http://localhost:3000/canvas" )
  } )
  it("Should be able to click the 'See My Inspirations' button and go to Favorites page", () => {
    cy.get("button")
      .last()
      .click()
      .url()
      .should("eq", "http://localhost:3000/favorites");
  });
  //SAD PATHS
});
