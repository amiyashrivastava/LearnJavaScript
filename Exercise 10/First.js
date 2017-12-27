// Perform math operations on 2 operands

function doMultiply(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;

document.getElementById("Response").innerHTML = "The result is: <br>" + number1 * number2;

}

function doDivide(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;

document.getElementById("Response").innerHTML = "The result is: <br>" + number1 / number2;
}