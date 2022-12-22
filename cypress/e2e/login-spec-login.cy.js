describe("ALL", () => {
  beforeEach(() => {});
  it("login success", () => {
    cy.intercept("*/auth/login_one_user").as("login");
    cy.visit("http://localhost:19006/login");
    cy.get("[data-testid=login_email]")
      .should("have.value", "")
      .type("i@rdbx.ru");
    cy.get("[data-testid=login_password]")
      .should("have.value", "")
      .type("ea1c2o1m");

    cy.get("[data-testid=login_btn]").click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.data.attributes.token_type).to.eq("bearer");
      expect(response.body.data.attributes).to.have.property("expires_in");
      expect(response.body.data.attributes).to.have.property("access_token");
    });

    cy.url().should("eq", "http://localhost:19006/");
  });
  it("top menu", () => {
    cy.get("[data-testid=base_top_menu]").click();
    cy.get("[data-testid=left_menu_header]")
      .should("contain", "Ильдар Тестовый")
      .click();
    cy.url().should("eq", "http://localhost:19006/");
    // cy.get("[data-testid=menu_links]");
    // .should("have.length.gt", 5);
    // .each((i) => console.table([i.attr("href")]));
  });

  it("menu links", () => {
    const links_name = [
      "Главная страница",
      "Тестовый стенд",
      "Для вас",
      "История сканирования",
      "Уведомления",
      "Создание мероприятия",
    ];
    cy.get("[data-testid=base_top_menu]").click();
    cy.get("[data-testid=menu_links]")
      .children()
      .should("have.length.gt", 5)
      .each((i, index) => {
        console.log(i[0].innerText.includes(links_name[index]));
      });

    cy.get("[data-testid=menu_links]").children()[0].click();
  });
});
