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
		var paths = {
			first: this.collectPaths(this.first),
			second: this.collectPaths(this.second)
		};

		var diffs = [];

		helpers.each(paths.first, function(_path) {

			if (paths.second.indexOf(_path) === -1) {
				diffs.push({
					is: "deleted",
					path: _path,
					line: helpers.dot(this.first, _path)
				});
			} else if (helpers.dot(this.first, _path) != helpers.dot(this.second, _path)) {
				diffs.push({
					is: "changed",
					path: _path,
					line: helpers.dot(this.second, _path)
				});
			}

		});

		helpers.each(paths.second, function(_path) {

			if (paths.first.indexOf(_path) === -1) {
				diffs.push({
					is: "added",
					path: _path,
					line: helpers.dot(this.second, _path)
				});	
			}

		});

		return diffs;
	};

	// we probably need something like this first
	this.collectPaths = function(structure, _path) {

		var paths = [], path = (_path || "");

		helpers.each(structure, function(value, key) {
				
			if (helpers.isArray(value) || helpers.isHash(value)) {
				
				paths = paths.concat(
					this.collectPaths(value, helpers.appendDotPath(path, key))
				);

			} else {

				paths.push(helpers.appendDotPath(path, key));

			}

		});
	
		return paths;
	};

	return this;

})(helpers);
