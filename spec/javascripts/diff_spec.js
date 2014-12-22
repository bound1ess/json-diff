describe("Diff suite", function() {
	it("allows you to pass two valid JSON strings as input", function() {
		var willThrow = function() {
			diff.setJSONStrings("meaningless string", "{}");
		};
		var willNotThrow = function() {
			diff.setJSONStrings("{}", "{}");
		};
		expect(willThrow).toThrow();
		expect(willNotThrow).not.toThrow();
		expect(diff.first).toEqual(jasmine.any(Object));
	});
	it("calculates the difference between two JSON strings", function() {
		var first = {foo: {bar: 12, baz: 321}}, second = {fuz: 1, foo: {baz: 123}};
		diff.setJSONStrings(JSON.stringify(first), JSON.stringify(second));
		expect(diff.calculate()).toBe([
			{is: "added", path: "fuz", line: 1},
			{is: "deleted", path: "foo.bar", line: 12},
			{is: "changed", path: "foo.baz", line: 123}  
		]);
	});
});
