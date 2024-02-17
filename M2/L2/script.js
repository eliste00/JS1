//Question 1
var product = {
  name: "Chicken feet",
  price: 149.99,
};
console.log(product.price);

//Question 2
var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];
animals.forEach(function (animal) {
  console.log(animal.colour);
});

//Question 3
var dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {
  const dinner = dinnerOptions[i];
  if (dinner.onSpecial === true) {
    console.log(dinner.name);
  }
}

//Question 4
var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];
for (let index = 0; index < people.length; index++) {
  const person = people[index];
  if (person.age >= 20 && person.age <= 50) {
    console.log(`${person.firstName} ${person.lastName}`);
  }
}
//Question 5
