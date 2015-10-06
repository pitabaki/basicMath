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
	var transfer = "";
	//*************** DELETE WHEN PROBLEM SOLVED *******************
	var testPrint = document.getElementById("test");

	//*************** DELETE WHEN PROBLEM SOLVED *******************

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
	var counter = 0;
	//for loop to cycle through the "numbers" array
	for(var i = 0; i < numberString.length; i++){
		//for each passing of the for loop, add the current value to the total of "something"
		something += numberString[i];
	}
	if(testPrint.textContent !== "undefined"){
		testPrint.textContent = something;
	}else{
		testPrint.innerText = something;
	}

	//Do/While/For that cycles through something and parses out the numbers
	//For loop adds 1 for every encounter with a number
	//Once it comes across a comma, counter's total is used as an in

	//!!!!!!!!!!!!!! Fix This Loop; Only Cycling Through For Initial Number
	do{
		for(var h = 0; h < something.length; h++){
			if(something[h] !== ","){
				counter++;
		        transfer += something[h];
			}else{
		        something = something.slice(counter + 1);
		        transfer = Number(transfer);
		        numbers.push(transfer);
		        numbers.splice(1,1);
		        console.log("numbers:" + numbers);
		        transfer = "";
		        counter = 0;
		      console.log("something: " + something);
		    }
		}
	}while(something.length > 0);
	console.log("counter:" + counter);
	console.log("something: " + something);
	//parse out strings as integers
	//cycle through the numbers array

	//*************** DELETE WHEN PROBLEM SOLVED *******************
	/*for(var h = 0; h < something.length; h++){
		if(something[h] !== ","){
			numbers.push(something[h]);
		}else if(something[h] === ","){
			numbers = Number(numbers);
		}
	}*/
	console.log("numbers: " + typeof numbers);
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