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
  // it("Should render movie images", () => {
  //   cy.get('img[alt="Money Plane"]').should("be.visible");
  // });
  // it("Should render movie ratings", () => {
  //   cy.get("div.rating").find("img").should("be.visible");
  // });
  // it("Should render movie year", () => {
  //   cy.get("h2.release-date-value").should("be.visible");
  // });
  // it("Should go to movie modal view when movie button is clicked", () => {
  //   cy.get('img[alt="Money Plane"')
  //     .click()
  //     .url()
  //     .should("eq", "http://localhost:3000/694919");
  // });
  // it("Should be able to click the back button in the browser to go home", () => {
  //   cy.get('img[alt="Money Plane"')
  //     .click()
  //     .url()
  //     .should("eq", "http://localhost:3000/694919")
  //     .go("back")
  //     .url()
  //     .should("eq", "http://localhost:3000/");
  // });
  // it("Should be able to click the forward button in the browser to go home", () => {
  //   cy.get('img[alt="Money Plane"')
  //     .click()
  //     .url()
  //     .should("eq", "http://localhost:3000/694919")
  //     .go("back")
  //     .url()
  //     .should("eq", "http://localhost:3000/")
  //     .go("forward")
  //     .url()
  //     .should("eq", "http://localhost:3000/694919");
  // });
  // it("Should return movie search results", () => {
  //   cy.get('input[type="text-box"]')
  //     .type("Mulan")
  //     .should("have.value", "Mulan")
  //     .get('img[alt="Mulan"]')
  //     .should("be.visible")
  //     .get('img[alt="Money Plane"]')
  //     .should("not.exist");
  // });
  // it("Should return an error message if searched movie is not found", () => {
  //   cy.get('input[type="text-box"]')
  //     .type("Mulane")
  //     .should("have.value", "Mulane")
  //     .get("p")
  //     .contains(
  //       "No movie found with that title. Please search for another movie."
  //     )
  //     .should("be.visible");
  // });
  // it("Should return an error message for a 404 movie not found", () => {
  //   cy.visit('http://localhost:3000/6949198')
  //   .get("div.modal-failed-to-load-error")
  //   .contains(
  //     "Movie data failed to load. Please contact Comcast."
  //   )
  // })
});
