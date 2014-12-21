$(document).ready(function() {
	function addDiff(options) {
		_diff = $("<div>", {"class": "node node-" + options.is});
		_diff.append($("<strong>").html(options.path)); _diff.append(options.line);
		$("#diff").append(_diff);
	}
	function addDiffs(diffs) {
		$("#diff").empty();
		$.each(diffs, function(_diff) {
			addDiff(_diff);
		});
	}
	$("#diff-filters button").click(function() {
		_this = $(this), type = _this.data("is");
		_this.addClass("active");
		_this.siblings().removeClass("active");
		diffs = $.grep(diff.calculate(), function(_diff) {
			return (type == "*") || (_diff.is == type);
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
