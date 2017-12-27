/*Checks guesses*/

function checkGuess( ){
	var guess = document.getElementById("guess").value;	
	var response;
	if ( guess >= 0 && guess <= 10){
		var randomNumber = Math.floor(Math.random() * 10);
		randomNumber == guess ?  response = "Good Work" : response = "Not Matched";
		document.getElementById("Response").innerHTML = response;
	}
	else document.getElementById("Response").innerHTML = "Enter a number between 0 and 10";
}









