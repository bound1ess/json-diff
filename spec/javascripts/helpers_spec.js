describe("Helpers suite", function() {
	it("has a method that helps you detect objects and arrays", function() {
		expect(helpers.isArray([])).toBe(true);
		expect(helpers.isArray({})).toBe(false);
	});
	it("has a method that parses JSON for you", function() {
		expect(helpers.parseJSON("{\"key\": 123}").key).toBe(123);
	});
	it("has a method that validates JSON", function() {
		expect(helpers.isValidJSON("meaningless string")).toBe(false);
		expect(helpers.isValidJSON("{}")).toBe(true);
	});
});
