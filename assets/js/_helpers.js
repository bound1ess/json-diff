var helpers = (function($) {

	this.isArray = function(smth) {
		return this.isHash(smth) && (smth instanceof Array);
	};
	
	this.isHash = function(smth) {
		return smth && (typeof smth == "object");
	};

	this.parseJSON = function(string) {
		return JSON.parse(string);
	};

	this.isValidJSON = function(string) {
		try { JSON.parse(string) } catch (e) { return false; }
		return true;
	};

	this.dot = function(data, path) {
		var last = data;
		path.split(".").forEach(function(element) {
			last = last[element];
		});
		return last;
	};

	this.each = function(elements, callback) {
		if (this.isArray(elements)) {
			elements.forEach(callback);
			return null;
		} 
		if (this.isHash(elements)) {
			for (var key in elements) {
				callback(elements[key], key);
			}
		}
	};

	return this;

})();
