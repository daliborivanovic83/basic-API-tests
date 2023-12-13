describe("Dummy examples delete from DB", () => {
  it.only("Delete an employee record", () => {
    cy.request({
      method: "DELETE",
      url: "https://dummy.restapiexample.com/api/v1/delete/2",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      const data = response.body;

      expect(data.message).to.eq("Successfully! Record has been deleted");
      expect(data.status).to.eq("success");
    });
  });
});
