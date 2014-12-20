$(document).ready(function() {
	$("#view-diff").click(function() {
		alert(
			"You want to compare '" 
			+ $("#first-json").val() 
			+ "' with '" 
			+ $("#second-json").val() 
			+ "', right?"
		);
	});
});
