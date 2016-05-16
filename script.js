'use strict'; //strict mode: catch silly errors

//code goes here!
console.log("Hello world!"); //prints

var x = 4; //create and assign variable
var y = x; //create and assign variable
x = 5;     //assign variable (no var bc already declared)


console.log(x+', '+y); //=> 5, 4

// personName = 'Joel Ross'; --> Uncaught Error

//Make a new string variable for the value "The iSchool is my school"
var isch = "The iSchool is my school";

//Log out the string
console.log(isch);

//Convert the string to upper case, replacing the previous string
//Log out the changed variable
var isch = isch.toUpperCase();
console.log(isch);

//Use the slice method to extract characters 2 through 10 (inclusive) 
//into a new variable, and log that variable
var isch2 = isch.slice(2,11);
console.log(isch2);

//Use the indexOf method to see if the word "cool" is in your string
var isch3 = isch.indexOf("cool");
console.log(isch3);