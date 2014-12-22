describe("Helpers suite", function() {
	it("has a method that helps you detect arrays", function() {
		expect(helpers.isArray([])).toBe(true);
		expect(helpers.isArray({})).toBe(false);
	});
	it("has a method that helps you detect hashes", function() {
		expect(helpers.isHash({})).toBe(true);
		expect(helpers.isHash(42)).toBe(false);	
	});
	it("has a method that parses JSON for you", function() {
		expect(helpers.parseJSON("{\"key\": 123}").key).toBe(123);
	});
	it("has a method that validates JSON", function() {
		expect(helpers.isValidJSON("meaningless string")).toBe(false);
		expect(helpers.isValidJSON("{}")).toBe(true);
	});
	it("has a method that allows you to use dot notations for arrays and hashes", function() {
		var data = {foo: {bar: [{baz: 42}]}};
		expect(helpers.dot(data, "foo.bar.0.baz")).toBe(42);
	});
});
