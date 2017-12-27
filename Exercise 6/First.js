/*JavaScript program to determine whether a given year is a leap year in the
Gregorian calendar.*/

function isLeapYear( ){
	var year = document.getElementById("year").value;

	if ( (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) )
		document.getElementById("Response").innerHTML = "True";
	else
		document.getElementById("Response").innerHTML = "False";	
}









