//Question 1) Write code to display something (1 property of an object) in a div with an id 'main-display'

var myObj = {name: "Holly", dog: "Nibbler"};

$('#main-display').text(myObj.name);

// Check!!

//Question 2) Change the displayed text from the last question from black to green.

$('#main-display').css('color', 'green');


// Check!!

//Question 3) Something down below is a bad practice, what is it and how do you fix it?

var food = "Pasta";

if(food == "Pasta") {
	console.log("Yay! Pasta!");
} else {
	console.log("Ew! Bad choice.");
}

// I see two things:
// 1) need to use triple-equals in if (food == "Pasta")
// 2) Should use semi-colon after the last curleybrace.
// Check

//Question 4) In general what is the syntax for adding an element to the end of an array?

var arr = ['one', 'two'];
arr.push('three');

//Question 5) Write code to display an array of names.

// Wasn't sure if this needed to be displayed on a
// webpage so gave two solutions:

var arr = ['Avi', 'Matt', 'Corrine', 'Shaai'];

// Console.log
for i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

OR

// Somewhere on a webpage
$(document).ready(function(){
for i = 0, len = arr.length; i < len; i++) {
  $(this).html('<br>' + arr[i] + '</br>');
});

// Check!!  Thank you Avi!!

