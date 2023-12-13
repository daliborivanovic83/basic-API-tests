describe("ReqRes Api tests", () => {
  it.only("POST and Login Unsuccessfully", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      failOnStatusCode: false,
      body: {
        email: "peter@klaven",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.error).to.eq("Missing password");

      expect(response.status).to.eq(400);
    });
  });
});
