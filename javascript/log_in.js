$(document).ready(function(){
	$("#button").bind("click" , function(){
		var alog = "admin";
		var apass ="admin";
		var log = "olia";
		var pass ="olia";

		if ($("#email").val().split("@").length == 1) {
			alert("Неправильний email");
			return false;
		}

		if ($("#login").val() == log && $("#pass").val() == pass)
			$("#form").attr("action", "hello.php");
		else if ($("#login").val() == alog && $("#pass").val() == apass)
			$("#form").attr("action", "helloa.php");
		else {
			alert("Something is wrong with your data");
			return false;
		}
	});
});