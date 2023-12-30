// Number Object's

// Properties
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN); // to test this use isNaN() func
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.MIN_SAFE_INTEGER);

// Methods
// console.log(Number.parseFloat('1.2')); // 1.2
// console.log(Number.parseFloat('1,2')); // 1
// console.log(Number.parseInt('234')); // 234
// console.log(Number.isFinite('234')); // false
// console.log(Number.isInteger('234')); // false
// console.log(Number.isNaN('234')); // false
// console.log(Number.isSafeInteger('234')); // false

// Number.prototype
// console.log(Number.prototype.toExponential(5.123));
// console.log(Number.prototype.toFixed(5.123));
// console.log(Number.prototype.toLocaleString(123));
// console.log(Number.prototype.toPrecision(5.123));
// console.log(Number.prototype.toString(3.123));

// Math object
// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793
// pow(), exp(), log(), floor(), ceil(), min(), max(), random(), sqrt(), sign()

// const a = new Math(); // Unlike many other objects, you never create a Math object of your own.
// You always use the built -in Math object.
// console.log(a); // error, TypeError: Math is not a constructor

// let a, b, c = (4, 5, 6);
// console.log(a);
// console.log(b);
// console.log(c);
// function findMax(arr) {
//         console.log(arr);
//        return Math.max(arr)
// }
// console.log(findMax(a,b,c));

// BigInt
// const n = 123n;
// const m = BigInt(123); // no add 'NEW' keyword
// console.log(n); // 123n
// console.log(m); // 123n
// Math functions cannot be used on BigInt values

// Date Object
// beginning of January 1, 1970, UTC
// const dateObjectName = new Date([parameters])

//Calling Date without the new keyword returns a string representing the current date and time.
// console.log(Date()); // Sun Dec 31 2023 01:34:41 GMT+0300 (GMT+03:00)
// console.log(new Date()); // 2023-12-30T22:35:07.389Z
// console.log(typeof Date()); // string
// console.log(typeof new Date()); // object

/*With the "get" and "set" methods you can get and set seconds, minutes, hours, 
day of the month, day of the week, months, and years separately. 
There is a getDay method that returns the day of the week, 
but no corresponding setDay method, because the day of the week is set automatically.*/

/*
Seconds and minutes: 0 to 59
Hours: 0 to 23
Day: 0 (Sunday) to 6 (Saturday)
Date: 1 to 31 (day of the month)
Months: 0 (January) to 11 (December)
Year: years since 1900
*/

// const myDate = new Date("1993-2-2");
// console.log(myDate.getFullYear()); // 1993
// console.log(myDate.getMonth()); // 1
// console.log(myDate.getDay()); // 2 --> day of the week
// console.log(myDate.getHours()); // 0
// console.log(myDate.getDate()); // 2 --> day of the month

// console.log(myDate.setFullYear(1992)); // 696981600000
// console.log(myDate.getFullYear()); // 1992
// console.log(myDate.setDate()); // Nan, no have setDay()

// console.log(Date.parse("Aug 9, 1995")); // 807915600000
// console.log((new Date()).setTime(Date.parse("Aug 9, 1995"))); // parse() --> date strings to date objects

// Making Simple Counter

let hour = 0;
let min = 0;
let second = 0;

console.log(`counter is ${hour}:${min}:${second}`);
