describe("ReqRes Api tests", () => {
  it.only("Get all users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?delay=3",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;
      expect(response.status).to.eq(200);
      expect(data.data[0].id).to.eq(1);
      expect(data.data[0].email).to.eq("george.bluth@reqres.in");
      expect(data.data[0].first_name).to.eq("George");
      expect(data.data[0].last_name).to.eq("Bluth");
      expect(data.data[0].avatar).to.eq(
        "https://reqres.in/img/faces/1-image.jpg"
      );
    });
  });
});
