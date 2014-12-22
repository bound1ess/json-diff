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
		return this._calculate(this.first, this.second);
	};

	this._calculate = function(first, second, path) {
		var diffs = [], path = path || "";
		helpers.each(second, function(value, key) {
			path = helpers.appendDotPath(path, key);
			if (helpers.isArray(value) || helpers.isHash(value)) {
				diffs = diffs.concat(this._calculate(helpers.dot(first, path), value, path));
				return null;
			}
			if (helpers.dot(first, path)) { 

			}
		});
		return diffs;
	};

	return this;

})(helpers);
