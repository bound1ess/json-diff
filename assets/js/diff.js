var diff = (function(helpers) {

	this.setJSONStrings = function(first, second) {
		if (helpers.isValidJSON(first) && helpers.isValidJSON(second)) {
			this.first = helpers.parseJSON(first);
			this.second = helpers.parseJSON(second);
		} else {
			throw "Invalid JSON string(s) is/are supplied.";
		}	
	};
	
	this.calculate = function() {
		// This will later be replaced with the actual algorithm.
		// @TODO
		return [
			{is: "added", path: "foo", line: "She is too good for you, admit."},
			{is: "deleted", path: "foo.bar", line: "I would rather go back."},
			{is: "changed", path: "foo.bar.baz", line: "I am not sure about your job."}
		];
	};

	return this;

})(helpers);
