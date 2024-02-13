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
