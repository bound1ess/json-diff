$(document).ready(function() {
	function addDiff(options) {
		diff = $("<div>", {"class": "node node-" + options.is});
		diff.append($("<strong>").html(options.path)); diff.append(options.line);
		$("#diff").append(diff);
	}
	function addDiffs(diffs) {
		$("#diff").empty();
		$.each(diffs, function(diff) {
			addDiff(diff);
		});
	}
	$("#diff-filters button").click(function() {
		_this = $(this), type = _this.data("is");
		_this.addClass("active");
		_this.siblings().removeClass("active");
		diffs = $.grep(diff.calculate(), function(diff) {
			return (type == "*") || (diff.is == type);
		});
		addDiffs(diffs);
	});
	$("#view-diff").click(function() {
		try { 
			diff.setJSONStrings($("#first-json").val(), $("#second-json").val());
			$("#diff").html("Calculating the difference for you, wait a second...");
			// diff.calculate();
			// @TODO
			// => [{is: "added", path: "foo.bar.baz", line: "something meaningful"}]
			$("#diff-filters").show();
			$("#diff-filters button[data-is=\"*\"]").click();
		}
		catch (exception) {
			alert (exception);
			return false;
		}
	});
});
