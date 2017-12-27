/*a JavaScript program to rotate the string 'w3resource' 
in right direction by periodically removing one letter from 
the end of the string and attaching it to the front*/
var textElement = document.getElementById( "target" );


/*setInterval(function ( ){
	var text = textElement.innerHTML.substr(textElement.innerHTML.length-1, 1) + 
	           textElement.innerHTML.substr(0, textElement.innerHTML.length - 1);
	 textElement.innerHTML = text;
},100);*/

function moveLetter( ){
	var text = textElement.innerHTML.substr(textElement.innerHTML.length-1, 1) + 
	           textElement.innerHTML.substr(0, textElement.innerHTML.length - 1);
	 textElement.innerHTML = text;
}

//setInterval just needs function name and not function call
setInterval(moveLetter,100);


