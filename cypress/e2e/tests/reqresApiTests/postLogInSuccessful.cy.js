describe("ReqRes Api tests", () => {
  it.only("POST and Login successfully", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      failOnStatusCode: false,
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.token).to.eq("QpwL5tke4Pnpja7X4");

      expect(response.status).to.eq(200);
    });
  });
});
