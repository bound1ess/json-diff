describe("Helpers suite", function() {
	it("has a method that helps you detect objects and arrays", function() {
		expect(helpers.isArray([])).toBe(true);
		expect(helpers.isArray({})).toBe(false);
	});
});
