/*
Utility for Math Solutions
By: Peter Berki
Purpose: Lightweight, aesthetically pleasing way of accessing formulas for everyday math.

This library will provide a simple way of accessing formulas for mathematical calculations.
As formulas are added, the list provided below will grow. So, initially, I'm starting this document off with an equation for finding the average number of an array.

List of formulas:

1. Finding the average in an array of numbers
*/

function average(){
	'use strict';
	var numberArray = document.getElementById("num_array").value;
	var numberString = [];
	var numbers = [];
	/*var numLength = document.getElementById("num_length").value;
	numLength = Number(numLength);
	//console.log(numberArray.length);*/
	//console.log(typeof numberArray[7]);
	/*for(var h = 0; h < numberArray.length; h++){
		if((numberArray[h] !== ",") && (numberArray[h] !== " ")){
			numLength++;
		}else if((numberArray[h] === ",") || (numberArray[h] === " ")){
			numLength = 0;
		}
	}
	console.log(numLength);*/
	for(var g = 0; g < numberArray.length; g++){
		if((numberArray[g] !== ",") && (numberArray[g] !== " ")){
			numberString.push(numberArray[g]);
		}else if(numberArray[g] === " "){
			numberString.push();
		}else{
			numberString.push(",");
		}
	}
	//numberArray = Number(numberArray);
	console.log(numberString);
	//declare a variable for calculating the sum
	var something = "";

	//for loop to cycle through the "numbers" array
	for(var i = 0; i < numberString.length; i++){
		//for each passing of the for loop, add the current value to the total of "something"
		something += numberString[i];
	}
	console.log("something: " + something);
	//parse out strings as integers
	//cycle through the numbers array
	for(var h = 0; h < something.length; h++){
		if(something[h] !== ","){
			numbers.push(something[h]);
		}else if(something[h] === ","){
			numbers = Number(numbers);
		}
	}
	console.log("this is " + numbers);
	console.log(something /= numbers.length);
	//Divide total of something by the length of numbers
	return false;
}

//testing Average
//console.log(average([39,42]));

function init(){
	'use strict';
	var form = document.getElementById("calcForm");
	form.onsubmit = average;

}

window.onload = init;