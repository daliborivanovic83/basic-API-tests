describe("ReqRes Api tests", () => {
  it.only("POST and create a user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      failOnStatusCode: false,
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.name).to.eq("morpheus");
      expect(data.job).to.eq("leader");
      expect(response.status).to.eq(201);
    });
  });
});
