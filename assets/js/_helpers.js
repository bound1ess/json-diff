var helpers = (function($) {

	this.isArray = function(smth) {
		return Array.isArray(smth);
	};

	this.parseJSON = function(string) {
		return JSON.parse(string);
	};

	this.isValidJSON = function(string) {
		try { JSON.parse(string) } catch (e) { return false; }
		return true;
	};

	return this;

})();
