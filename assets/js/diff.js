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
		var diffs = [];
		// ???
		return diffs;
	};

	return this;

})(helpers);
