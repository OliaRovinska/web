$(document).ready(function(){
	$("#button").bind("click" , function(){

		var str = $("#file").val().substring($("#file").val().indexOf('.'));
		if (str != "")
			alert (str);

		var method = $("input[name='method']:checked").val();
		$('#try_form').attr("method", method);

		var prog = $("#program").val() + ".php";
		$('#try_form').attr("action", prog);
	});
});