// question1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
  console.log("The first number is less than the second");
}

//Question 2
var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
  console.log(" you are old enough");
} else {
  console.log("you are not old enough");
}
//Question 3
var income = "11.050";
var maximumIncome = "13.075";

if (income <= maximumIncome) {
  console.log("income is less then limit ");
} else {
  console.log("income is less then limit");
}
//question 4
var color = "blue";
var secondColor = "orange";

if (color >= "orange") {
  console.log("this color is a bit rubbish");
}
// question5
var invoicePaid = "false";
var invoicePaid = "tru";

if (invoicePaid <= "false") {
  console.log("this invoice not paid");
}
//question6
var selectedNumber = "11";
var winningNumber = "15";

if ((secondNumber = winningNumber)) {
  console.log("11!==15");
}
//question7

var dayOfTheWeek = 2;
var messageToLog;
switch (dayOfTheWeek) {
  case 1:
    messageToLog = "Monday";
    break;
  case 2:
    messageToLog = "tuesday";
    break;
  case 3:
    messageToLog = "wednesday";
    break;
  case 4:
    messageToLog = "wednesday";
    break;
  case 5:
    messageToLog = "friday";
    break;
  case 6:
    messageToLog = "saturday";
    break;
  case 7:
    messageToLog = "sunday";
    break;
  default:
    messageToLog = "invalid day number";
    break;
}
console.log(messageToLog);
