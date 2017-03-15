$(document).ready(function() {
	function load_page() {
		var my_height = $("#menu").css("height").substring(0, 
			$("#menu").css("height").indexOf("px")) / 2;
		$("#menu").css("margin-top", "-" + my_height + "px");
	}
	$("body").bind("load", load_page());
	
	$("#menu").bind("click", function() {
		$("#menu").fadeOut(200, function() {
			alert("menu was hide");
		});
	});
});