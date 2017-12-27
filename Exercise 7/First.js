/*JavaScript program to find 1st January is being a Sunday between 2014 and 2050*/

function firstDayOfYear( ){
	var year = document.getElementById("year").value;	
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	if (year >= 2014 && year <= 2050 ){
		var date = new Date( "01/01/" + year);
		document.getElementById("Response").innerHTML = "The first of Jan is a: " + days[date.getDay( )];
	}
	else
		document.getElementById("Response").innerHTML = "Please enter a year between 2014 and 2050";		
}









