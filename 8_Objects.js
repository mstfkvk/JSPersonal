const obj={}
Object.create(obj);

// Accessing properties

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

// for...in

// Object.keys()

// Object.getOwnPropertyNames()


// Inheritance
Car.prototype.color = "red";
console.log(car1.color); // "red"

// getter settter
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};


// > NOTE
/* Two distinct objects are never equal, even if they have the same properties */

new Date(2023.2, 2);