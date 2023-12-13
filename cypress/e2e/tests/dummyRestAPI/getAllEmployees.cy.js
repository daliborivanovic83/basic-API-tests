describe("Dummy examples Api tests", () => {
  it.only("Get all employees", () => {
    cy.request({
      method: "GET",
      url: "https://dummy.restapiexample.com/api/v1/employees",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data[0].id).to.eq(1);
      expect(data.data[0].employee_name).to.eq("Tiger Nixon");
      expect(data.data[0].employee_age).to.eq(61);
      expect(data.data[0].profile_image).to.eq("");
    });
  });
});

//expect(data.products[0].id).to.eq(1);
//expect(data.products[0].name).to.eq("Blue Top");
//expect(data.products[0].price).to.eq("Rs. 500");
//expect(data.products[0].brand).to.eq("Polo");
//expect(data.products[0].category.usertype.usertype).to.eq("Women");
//expect(data.products[0].category.category).to.eq("Tops");
