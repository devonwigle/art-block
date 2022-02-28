describe("Load homepage and render the expected page elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the logo", () => {
    cy.visit("http://localhost:3000/canvas")
      .get("div.small-logo-loca")
      .should("be.visible");
  });
  it("Should be able to visit the page and render the 'Get More Inspiration' button", () => {
    cy.visit("http://localhost:3000/canvas")
      .get("div.nav-buttons")
      .get("button")
      .contains("Get More Inspirations");
  });
  it("Should be able to visit the page and render the 'Your Favorite Inspirations' header", () => {
    cy.visit("http://localhost:3000/canvas").contains(
      "h1",
      "Sketch Your Thoughts"
    );
  });
  it("Should be able to visit the page and render the canvas color", () => {
    cy.visit("http://localhost:3000/canvas").get("div.canvas-inspiration");
  });
  it("Should be able to visit the page and render the canvas color", () => {
    cy.visit("http://localhost:3000/canvas").get("rect");
  });
  it("Should be able to click clear canvas button", () => {
    cy.get(".clear-button")
    .click()
  })
  it("Should be able to click the 'Get More Inspiration' button and go to Inspiration page", () => {
    cy.get(".more-inspo")
    .click()
    .url()
    .should("eq", "http://localhost:3000/inspiration");
  });
})