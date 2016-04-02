// Code Your Solution Here
console.log("Test");
var name = prompt("What is your name?");
var age = prompt("What is your age?");
var trip_destination = prompt("What is your trip destination?");
var number_of_travelers = prompt("How many people are you traveling with?");
var type_of_trip = prompt("What are you looking for in trip?");

alert(name + " who is " + age + " years old is going to " + trip_destination + ". They are traveling with " + number_of_travelers + ".They are going to have a " + type_of_trip + " trip." );

if(type_of_trip == "relaxing" || type_of_trip == "Relaxing"){
  alert("You should go on a beach vacation");
}