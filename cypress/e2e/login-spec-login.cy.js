describe("login", () => {
  it("passes", () => {
    cy.visit("http://localhost:19006/login");
    cy.get("[data-testid=login_email]")
      .should("have.value", "")
      .type("i@rdbx.ru");
    cy.get("[data-testid=login_password]")
      .should("have.value", "")
      .type("ea1c2o1m");
    cy.get("[data-testid=login_btn]").click();
  });
});
