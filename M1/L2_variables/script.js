// question 1
const number1 = 12;
const number2 = 14.1;

// question 2
const workingDays = "Monday-Tusday-Onsday-Trsday-Fraday-";

// question 3
const addition = 3 + 1;
const subtracion = 3 - 1;
const multiplication = 3 * 1;
const division = 3 / 1;
//q 4
const kallVariabelenForAkkuratDetDuVil = false;

// question 5
const frogString = "The frogs are angry.";
console.log(frogString.length);

// question 6
var timeElapsed;
var totalPrice;

// question 7
// var number1= 53;
// var number2= 44,6;
var numberA = "53";
var numberB = "44.6";

var convertedNumberA = parseInt(numberA);
var convertedNumberB = parseFloat(numberB);

// question 8
var pet = "donkey";
console.log(typeof pet);

var age = 89;
console.log(typeof age);

var discountApplied = true;
console.log(typeof discountApplied);

var timeLeft;
console.log(typeof timeLeft);

// // question 9
var header = "Updating heading";
var heading = document.querySelector("h1");
heading.innerHTML = header;

// // question 10

var body = document.querySelector("body");
body.style.backgroundColor = "green";
var color = body.style.backgroundColor;

if (color === "red") {
  console.log("it is red");
} else if (color === "blue") {
  console.log("it is blue");
} else {
  console.log("is not red or blue");
}

switch (color) {
  case "red":
    console.log("it is red");
    break;
  case "blue":
    console.log("it is blue");
    break;
  default:
    break;
}
