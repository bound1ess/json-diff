var diff = (function(helpers) {

	this.setJSONStrings = function(first, second) {
		if (helpers.isValidJSON(first) && helpers.isValidJSON(second)) {
			this.first = first, this.second = second;
		} else {
			throw "Invalid JSON string(s) is/are supplied."
		}	
	};
	
	return this;

})(helpers);
