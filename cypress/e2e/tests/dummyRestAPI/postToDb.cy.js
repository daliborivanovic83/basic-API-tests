describe("Dummy examples post to DB", () => {
  it.only("Post to Db", () => {
    cy.request({
      method: "POST",
      url: "https://dummy.restapiexample.com/api/v1/create",
      failOnStatusCode: false,
      body: { name: "test", salary: "123", age: "23" },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.data.name).to.eq("test");
      expect(data.data.salary).to.eq("123");
      expect(data.data.age).to.eq("23");
    });
  });
});
