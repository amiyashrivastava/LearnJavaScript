var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currDate = new Date(Date.now());

console.log("Today is : " + Days[currDate.getDay()]);

console.log(function(){
	if (currDate.getHours() - 12 >= 0 ) 
		return ((currDate.getHours() - 12) + " PM : " + currDate.getMinutes() + " : " +currDate.getSeconds());
	else
		return (currDate.getHours() + " AM : " + currDate.getMinutes() + " : " + currDate.getSeconds());
}());
