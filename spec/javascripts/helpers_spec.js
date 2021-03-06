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
		expect(helpers.dot(data, "unexistent.path")).toBe(null);
	});

	it("has methods that help you build dot-like paths", function() {
		expect(helpers.appendDotPath("", "foo")).toBe("foo");
		expect(helpers.appendDotPath("foo", "bar")).toBe("foo.bar");
		expect(helpers.dotGoBack("foo.bar")).toBe("foo");
	});

	it("has a method that iterates over an array or a hash", function() {
		helpers.each([1, 2, 3, 4, 5], function(value, index) {
			expect(index).toBe(value - 1);
		});

		helpers.each({foo: "fo", boo: "bo"}, function(value, key) {
			expect(key).toBe(value + "o");
		});
	});

});
