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

		// Setup all needed variables.
		var diffs = [], path = (path || "");

		// Iterate over given array/hash.
		helpers.each(first, function(value, key) {

			console.log(value);

			// Do not forget to update the current "path".
			path = helpers.appendDotPath(path, key);
			
			// Work with nested structures.
			if (helpers.isArray(value) || helpers.isHash(value)) {

				diffs = diffs.concat(
					this._calculate(value, helpers.dot(second, path), path)
				);

				return null;
			}

			console.log(first, second);

			// Check for changed elements.
			if (helpers.dot(second, path) != helpers.dot(first, path)) { 
				diffs.push({is: "changed", "path": path, line: helpers.dot(second, path)});
			}

			// Check for deleted elements.
			if (helpers.dot(first, path) && helpers.dot(second, path) == null) {
				diffs.push({is: "deleted", "path": path, line: helpers.dot(first, path)});
			}

			// Check for added elements.
			if (helpers.dot(first, path) == null && helpers.dot(second, path)) {
				diffs.push({is: "added", "path": path, line: helpers.dot(second, path)});
			}

			// Reset the "path".
			path = helpers.dotGoBack(path);
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
