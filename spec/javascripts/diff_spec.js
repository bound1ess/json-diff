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
		expect(diff.first).toEqual(jasmine.any(Object))
	});
	//it("calculates the difference between two JSON strings", function() {
		// @TODO
	//});
});
