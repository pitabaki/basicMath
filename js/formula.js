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
	var numberArray = document.getElementById("num_array").value,
		print = document.getElementById("print"),
		number,
    	count,
    	total = 0,
    	tempStorage = [],
    	secondTemp = [],
    	pushStorage = [];

	console.log(numberArray);

	//convert numberArray from string to array
	for(var y = 0; y < numberArray.length; y++){
		//for all numbers, push to empty array
		if(isNaN(parseFloat(numberArray[y])) !== true){
			tempStorage.push(numberArray[y]);
		//for characters that aren't numbers, but also aren't decimals
		}else if((numberArray[y] === ',') || (numberArray[y] === ' ')){
			pushStorage = tempStorage.join('');
			secondTemp.push(pushStorage);
			tempStorage = [];
			pushStorage = [];
		}else if(numberArray[y] === '.'){
			tempStorage.push(numberArray[y]);
		}
	}

	if(tempStorage.length !== 0){
		pushStorage = tempStorage.join('');
		secondTemp.push(pushStorage);
		pushStorage = [];
	}

	count = secondTemp.length;

	for(var g = 0; g < secondTemp.length; g++){
		number = parseFloat(secondTemp[g], 2);
		total += number;
	}
	//Divide total by the length count
	total = total / count;
	total = total.toFixed(2);

	return false;
}

function init(){
	'use strict';
	var form = document.getElementById("calcForm");
	form.onsubmit = average;

}

window.onload = init;