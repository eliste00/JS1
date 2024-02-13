// question 1
var winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(winningNumbers[2]);

//Question 2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("orange");
console.log(vegetables);
//Question 3
var randomThings = ["pumpkin", false, 23, true, "tomato"];
for (var i = 0; i < randomThings.length; i++) {
  var element = randomThings[i];
  console.log(element);
}
//Question 4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (let index = 0; index < moreThings.length; index++) {
  const element = moreThings[index];
  if (typeof element === "number") {
    console.log(element);
  }
}
//Question 5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
