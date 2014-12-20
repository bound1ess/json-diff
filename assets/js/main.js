$(document).ready(function() {
	$("#view-diff").click(function() {
		$("#diff").html("Calculating the difference for you, wait a second...");
		try { 
			diff.setJSONStrings($("#first-json").val(), $("#second-json").val());
		}
		catch (exception) {
			alert (exception);
			return false;
		}
	});
});
