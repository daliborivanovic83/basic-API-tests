describe("ReqRes Api tests", () => {
  it.only("Get all users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data[0].id).to.eq(7);
      expect(data.data[0].email).to.eq("michael.lawson@reqres.in");
      expect(data.data[0].first_name).to.eq("Michael");
      expect(data.data[0].last_name).to.eq("Lawson");
      expect(data.data[0].avatar).to.eq(
        "https://reqres.in/img/faces/7-image.jpg"
      );
    });
  });
});
