describe("ReqRes Api tests", () => {
  it.only("Put and update a user", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      failOnStatusCode: false,
    }).then((response) => {
      // cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(response.status).to.eq(204);
    });
  });
});
