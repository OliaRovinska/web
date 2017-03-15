<!DOCTYPE html>

<html>
	<head>
		<title>Before24. TRY ME</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<script type="text/javascript" src="javascript/jquery-3.1.1.min.js"></script> 
		<script type="text/javascript" src="javascript/try_me.js"></script>
		<link rel="stylesheet" type="text/css" href="css/main.css" />
	</head>
	<body>
		<form id="try_form" action="" method="get" >
			<span id="choise">EVERYBODY HAS A CHOISE</span><br>
			<input class="push" type ="file" id="file"><br>
			<span class="choise">Method:</span><br>
			<input type="radio" name="method" id="get" value="get"/>
			<label for="get">GET</label><br>
			<input type="radio" name="method" id = "post" value="post"/>
			<label for="post">POST</label><br>
			<span class="choise">Program: </span>
			<select name="program" id="program">
				<option disabled="disabled">what i want</option>
				<option value="hello">hello</option>
				<option value="goodbye">goodbye</option>
			</select><br>
			<input type="submit" class="push" id="button">
		</form>
	</body>

</html>