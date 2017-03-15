$(document).ready(function() {
	function load_page() {
		alert("Сторінка загрузилася\nurl сторінки: " + location.href);
		$("p:even").reverseText(); 
		Scroll();
	}
	$("#form").bind("load", load_page());

	var pos = 100;
	function Scroll() {
		obj=document.getElementById("thetext");
		pos -=1;
		if (pos < 0-obj.offsetHeight+50) 
			return;
		obj.style.top=pos + "px";  
		window.setTimeout(function () {Scroll();}, 30);
	}

	$(document).ready(function() {
		$("#again").bind("click", function() {
			pos = 100;
			Scroll();
		});
	});
});