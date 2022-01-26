//JS Variables
//Declaring variable with a data type
let fullName = "April Wyatt"; //string type #4
const numState = 50; //numeric type #5

//Variable Math Expression #6
let sum = 5 + 4; //Declaration of sum using addition
let sumTotal = sum; //Declaration of the total sum variable for the computer to add the values
console.log(sumTotal); //Call the data in the console log to display 9 as the total

/****#7 task is the add comments to the lab*****/

//JS Function #8
//Declaration of a fn named sayHello
function sayHello() {
  alert("Hello World!"); //Define what is displayed when the alert prompt is used as an parameter
}
sayHello(alert); //Calling the Function to alert in a pop up window

//Function with Two Parameters #9
function checkAge(name, age) {
  //Conditional with alert method
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page! ");
  }
}

checkAge("Charles", 21);//Call function
checkAge("Abby", 27); 
checkAge("James", 18); 
checkAge("John", 17); 

//Array with a while loop #10
let veggies = ["broccoli", "cauliflower", "green beans", "potatoes"]; //Declaration of an array statement with four values listed but index from 0 to 3
let count = 0; //Defining count so we can get a list of veggies
//The while loop runs a code block once if conditions are met
while (count < veggies.length) {
  console.log(veggies[count]); //Calling the data from the array to loop
  count++; //Running the loop for the veggies
}

// //Object Expression #11

let pet = [
  //Declaration of a variable called pet in an array statement
  //Within the array are two objects: name and breed; Name and breed are the property keywords
  {
    name: ["Charlie Brown", "Sunny Wyatt"], //Defining the value of the property keywords
    breed: "mixed", //These values are called property values
  },
];
console.log(pet); //Calling the data into the console log for review

//An Array with five objects #12
let people = [
  { student: "Harry Potter", age: 21 },
  { student: "Hermoione Granger", age: 19 },
  { student: "Ron Wesley", age: 21 },
  { student: "Ginny Wesley", age: 18 },
  { student: "Draco Malfoy", age: 22 },
];

for (let i = 0; i < people.length; i++) {
  checkAge(people[i].student, people[i].age);
}

// //Get Length Function #14
// //Declaration of a function named getLength
function getLength() {
  //Local variable declaration
  let x = "Hello World";
  //Getting length of the string with .length
  let len = x.length;
  //Check for length of the string
  console.log(len);
}
getLength(); //Call the Function

//I forgot this part of the drill
if (getLength % 2 == 0) {
  console.log("The world is nice and even!");
  
} else {
  console.log("The world is an odd place!");
}
