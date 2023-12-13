describe("ReqRes Api tests", () => {
  it.only("Get single resource", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown/2",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data.id).to.eq(2);
      expect(data.data.name).to.eq("fuchsia rose");
      expect(data.data.year).to.eq(2001);
      expect(data.data.color).to.eq("#C74375");
      expect(data.data.pantone_value).to.eq("17-2031");
    });
  });
});
