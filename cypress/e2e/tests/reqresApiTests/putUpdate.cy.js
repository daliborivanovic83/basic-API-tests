describe("ReqRes Api tests", () => {
  it.only("Put and update a user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users/2",
      failOnStatusCode: false,
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.name).to.eq("morpheus");
      expect(data.job).to.eq("zion resident");
      expect(response.status).to.eq(201);
    });
  });
});
