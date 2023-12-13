describe("ReqRes Api tests", () => {
  it.only("POST and Register a user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      failOnStatusCode: false,
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.id).to.eq(4);
      expect(data.token).to.eq("QpwL5tke4Pnpja7X4");
      expect(response.status).to.eq(200);
    });
  });
});
