// 1-TypedArray

// 2-Array objects

/*let arr1 = new Array(5);
console.log(arr1); // [ <5 empty items> ]

let arr2 = new Array(1, 2, 3, 4, 5, 0);
console.log(arr2); // [ 1, 2, 3, 4, 5, 0 ]

let arr3 = Array(3, 5, 8);
console.log(arr3); // [ 3, 5, 8 ]

let arr4 = [];*/

/*
const obj = {};
// …
obj.prop = [element0, element1, ... elementN];

// OR
const obj = { prop: [element0, element1, ... elementN] };
*/

// ---> Array.of static method to create arrays with specified elements or only one element

// console.log(Array.of(5, 9, 0)); // [ 5, 9, 0 ]

//--------------

// console.log(arr4.length); // 0
// arr4[20] = ['mk'];
// console.log(arr4.length); // 21
// console.log(arr4); // [ <20 empty items>, [ 'mk' ] ]

// --------------

let a = ["m", "k", "", "thx", "kel"];
console.log(a); // [ 'm', 'k', '', 'thx', 'kel' ]

a.length = 3;
console.log(a); // [ 'm', 'k', '' ]

// The forEach() method provides another way of iterating over an array:
a.forEach((each) => {
  //console.log(each);
});
/*
m
k
''
*/

// Methods
let arr = ["wind", "rain", "snow", "lightning"];

// console.log(arr.concat('24',41)); // [ 'wind', 'rain', 'snow', 'lightning', '24', 41 ]
// console.log(arr.join('--')); // wind--rain--snow--lightning (return string)
// console.log(arr.push('sunny')); // returns length of new array
// console.log(arr); // [ 'wind', 'rain', 'snow', 'lightning', 'sunny' ]
// console.log(arr.pop()); // sunny (removes the last element and return this element)
// console.log(arr.shift()); // wind (removes the first element and return this element)
// console.log(arr.unshift('wind','mudy')); // 5 (add elements in front of the array)
// console.log(arr); // [ 'wind', 'mudy', 'rain', 'snow', 'lightning' ]
// console.log(arr.slice(2,7)); // [ 'rain', 'snow', 'lightning' ]
// console.log(arr); // [ 'wind', 'mudy', 'rain', 'snow', 'lightning' ]
// console.log(arr.at(3)); // snow
// console.log(arr.splice(1,3,' ', '5','11')); // [ 'mudy', 'rain', 'snow' ]
// console.log(arr); // [ 'wind', ' ', '5', '11', 'lightning' ]
// console.log(arr.reverse()); // [ 'lightning', '11', '5', ' ', 'wind' ]
// console.log(['a','b',[1,2,['3','4','5']]].flat()); // [ 'a', 'b', 1, 2, [ '3', '4', '5' ] ] (The flat() method returns a new array with all sub-array elements )
// console.log(arr.sort()); // [ ' ', '11', '5', 'lightning', 'wind' ]


// indexOf() lastIndexOf()
/*
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
*/

// const a1 = [2, 4, 6];
// const a2 = a1.map((item) => item/2);
// console.log(a2); // [ 1, 2, 3 ]


// const a1 = ["a", "b", "c"];
// const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']


// const a1 = ["a", 10, "b", 20, "c", 30];
// const a2 = a1.filter((item) => typeof item === "number");
// console.log(a2); // [10, 20, 30]


// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.find((item) => typeof item === "number");
// console.log(i); // 10


// const a1 = ["a", 10, "b", 20, "c", 30];
// const i = a1.findIndex((item) => typeof item === "number");
// console.log(i); // 1


// function isNumber(value) {
//   return typeof value === "number";
// }
// const a1 = [1, 2, 3];
// console.log(a1.every(isNumber)); // true
// const a2 = [1, "2", 3];
// console.log(a2.every(isNumber)); // false


// function isNumber(value) {
//   return typeof value === "number";
// }
// const a1 = [1, 2, 3];
// console.log(a1.some(isNumber)); // true
// const a2 = [1, "2", 3];
// console.log(a2.some(isNumber)); // true
// const a3 = ["1", "2", "3"];
// console.log(a3.some(isNumber)); // false


// Using arrays to store other properties
const arr11 = [1, 2, 3];
arr11.property = "value";
console.log(arr11.property); // "value"
console.log(arr11) // [ 1, 2, 3, property: 'value' ]