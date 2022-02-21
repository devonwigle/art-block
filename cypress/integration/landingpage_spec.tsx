describe("Load homepage and render the Navigation Bar elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the logo", () => {
    cy.visit("http://localhost:3000").get("div.big-logo").should("be.visible");
  });
  it("Should be able to visit the page and render the parts of the logo", () => {
    cy.visit("http://localhost:3000").get("div.big-logo").contains("p");
  });
  it("Should be able to visit the page and render the div holding instructions", () => {
    cy.visit("http://localhost:3000")
      .get("div.landing-paragraphs")
      .should("be.visible");
  });
  it("Should be able to visit the page and render the rotating cube", () => {
    cy.visit("http://localhost:3000").get("div.para-box").should("be.visible");
  });
  it("Should be able to visit the page and render the 'Be Inspired' button", () => {
    cy.visit("http://localhost:3000")
      .get("button.landing-button")
      .should("be.visible");
  });
  it("Should be able to click the 'Be Inspired' button and go to Inspo page", () => {
    cy.visit("http://localhost:3000")
      .get("button.landing-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/inspiration");
  });
});
