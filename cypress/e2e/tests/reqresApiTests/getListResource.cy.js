describe("ReqRes Api tests", () => {
  it.only("Get list of resources", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data[0].id).to.eq(1);
      expect(data.data[0].name).to.eq("cerulean");
      expect(data.data[0].year).to.eq(2000);
      expect(data.data[0].color).to.eq("#98B2D1");
      expect(data.data[0].pantone_value).to.eq("15-4020");
    });
  });
});
