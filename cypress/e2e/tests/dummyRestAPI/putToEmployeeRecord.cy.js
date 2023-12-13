describe("Dummy examples put to DB", () => {
  it.only("Put to Db update an employee record", () => {
    cy.request({
      method: "PUT",
      url: "https://dummy.restapiexample.com/api/v1/update/21",
      failOnStatusCode: false,
      body: { name: "Dalibor", salary: "24000", age: "39" },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data.name).to.eq("Dalibor");
      expect(data.data.salary).to.eq("24000");
      expect(data.data.age).to.eq("39");
    });
  });
});
