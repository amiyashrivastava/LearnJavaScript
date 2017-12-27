/*Checks guesses*/

var today = new Date( );
var nextYear = today.getFullYear( ) + 1;
var nextChristmas = new Date("12/25/" + nextYear);
document.getElementById("Response").innerHTML = "Days until next Christmas: " + Math.ceil((nextChristmas - today)/86400000);
