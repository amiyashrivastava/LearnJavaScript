// Convert temperatures from one unit to another

function convert(){
	var temperature = document.getElementById( "temperature" ).value;
	document.getElementById("ctof").checked ? cToF( temperature ) : fToC( temperature );
}

function displayText(){
	var text;
	document.getElementById("ctof").checked ? text = "Enter temperature in Celcius" : 
	text = "Enter temperature in Fahrenheit";
	document.getElementById("Statement").innerHTML = text;
	document.getElementById( "temperature" ).value = "";
	document.getElementById("Response").innerHTML = "";
}

function cToF( temperature ){
	var converted = ( temperature * 9 ) / 5 + 32;
	document.getElementById("Response").innerHTML = temperature + "&#176; C is " + converted + "&#176; F";
}

function fToC( temperature ) {
	var converted = (temperature - 32 ) * 5 / 9;
	document.getElementById("Response").innerHTML = temperature + "&#176; F is " + converted + "&#176; C";
}