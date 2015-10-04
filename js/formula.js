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
	var numbers = [];
	console.log(numberArray);
	//declare a variable for calculating the sum
	var something = 0;

	//for loop to cycle through the "numbers" array
	for(var i = 0; i < numbers.length; i++){
		//for each passing of the for loop, add the current value to the total of "something"
		something += numbers[i];
	}
	console.log(something);
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