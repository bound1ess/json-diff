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

	return this;

})();
