import { createYield } from "typescript";

describe("Load homepage and render the expected page elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the logo", () => {
    cy.visit("http://localhost:3000/favorites")
      .get("div.small-logo-loca")
      .should("be.visible");
  });
  it("Should be able to visit the page and render the 'Get More Inspiration' button", () => {
    cy.visit("http://localhost:3000/favorites")
      .get("div.fav-header")
      .get("button")
      .contains("Get More Inspirations");
  });
  it("Should be able to visit the page and render the 'Your Favorite Inspirations' header", () => {
    cy.visit("http://localhost:3000/favorites").contains(
      "h1",
      "Your Favorite Inspirations"
    );
  });
  it("Should be able to visit the page and render the favorites container", () => {
    cy.visit("http://localhost:3000/favorites").get("div.favorite");
  });
   
  // })
  it("Should be able to delete inspirations", () => {
    cy.visit("http://localhost:3000/inspiration")
    cy.wait(500)
    .get(".save-button")
    .click()
    .get(".see-inspo-button")
    .click()
    .get("button.delete-button")
    .click()
  })
  it("Should be able to click the 'Get More Inspiration' button and go to Inspiration page", () => {
    cy.get("button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/inspiration");
  });
  
  // Need to test for when inspos are actually in the container
});
