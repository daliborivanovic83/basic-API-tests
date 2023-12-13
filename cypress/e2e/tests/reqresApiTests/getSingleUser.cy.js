describe("ReqRes Api tests", () => {
  it.only("Get one user", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data.email).to.eq("janet.weaver@reqres.in");
      expect(data.data.first_name).to.eq("Janet");
      expect(data.data.last_name).to.eq("Weaver");
      expect(data.data.avatar).to.eq("https://reqres.in/img/faces/2-image.jpg");
    });
  });
});
