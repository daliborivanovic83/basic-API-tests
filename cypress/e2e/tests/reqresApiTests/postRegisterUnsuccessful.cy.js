describe("ReqRes Api tests", () => {
  it.only("POST and Register unsuccessfully", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      failOnStatusCode: false,
      body: {
        email: "sydney@fife",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.error).to.eq("Missing password");

      expect(response.status).to.eq(400);
    });
  });
});
