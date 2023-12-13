describe("Dummy examples get one employee", () => {
  it.only("Get one employee", () => {
    cy.request({
      method: "GET",
      url: "https://dummy.restapiexample.com/api/v1/employee/1",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data.id).to.eq(1);
      expect(data.data.employee_name).to.eq("Tiger Nixon");
      expect(data.data.employee_age).to.eq(61);
      expect(data.data.profile_image).to.eq("");
      expect(data.data.employee_salary).to.eq(320800);
    });
  });
});
