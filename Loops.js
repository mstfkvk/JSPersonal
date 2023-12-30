/*      
The following values evaluate to "false"
false
undefined
null
0
NaN
the empty string ("")

All other values—including all objects—evaluate to true 
when passed to a conditional statement.
*/

// primitive boolean values is DIFFERENT from values of 'Boolean' Object
const bool1 = new Boolean(false);
const bool2 = false;
/*
if (bool1) {
        console.log("works well " + bool1);

} else {
        console.log("error  1");
}
if (bool2) {
        console.log("works well " + bool2);
} else {
        console.log("error  2");
}
*/

// switch ("ahmet2") {
//   case "ahmet":
//     console.log("this is ahmet");
//     break;
//   case "guler":
//     console.log("this is guler");
//     break;
//   default:
//     console.log("this is mustafa");
// break;
//     console.log("test");
// }

// throw any expression
/*
() => {
  //throw "mk";
  //throw 44;
  //throw false;
  throw {
    toString() {
      return "I'm musty";
    },
  };
  throw new Error("error message");
};
*/

// not only try, should be with catch or finally
/*try {
  throw "fdf";
} catch (err) {
  // 'console.error' instead of "console.log"
} finally {
  // executes in every condition
  // This 'return' overwrite above return's values
}
*/

// ====================================== 0 ======================================

// for statement
// do...while statement
// while statement
// labeled statement
// break statement
// continue statement
// for...in statement
// for...of statement

/*
// usage of label (can be used with "continue"(terminates current iteration for (innermost enclosing)) as well)

let i = 0;
label: while (true) {       //        <---------------
  i++;
  for (let index = 0; index < "mustafa".split("").length; index++) {
    if (index == 5) {
      console.log("mk");
      console.log(i);
      console.log(index);
      break label;         //          <------------- 
    }
  }
}
*/
////////-------------------------------------------------------
// for ... in

// for (const key in object) {

// }
/*
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

console.log(dumpProps({ car: "mustang", year: 2023, 'color':'red' }, "vehicle"));
*/

// > Important
/* use normal for loop for arrays*/
const fruits = ["apple", "banana", "tomato", "cherry"];
// for (const index in fruits) {
//   console.log(index); // returns 0, 1, 2, 3
// }
fruits.color = ["red", "blue", "black"];
// for (const index in fruits) {
//   console.log(index); // returns 0, 1, 2, 3, color
// }
// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]); // apple, banana, tomato, cherry
// }

////------------------------------------------------

// for ... of
// for...in iterates over property names, for...of iterates over property values
/*
for (const iterator of fruits) {
  console.log(iterator); // apple, banana, tomato, cherry
}
*/

// simultaneously loop over the keys and values
for (const [key, value] in Object.entries(fruits)) {
  //console.log(key+ " -> "+ value);
}

/*
0  ->  undefined
1  ->  undefined
2  ->  undefined
3  ->  undefined
4  ->  undefined
*/

for (const [key, value] of Object.entries(fruits)) {
  //console.log(key+ " -> "+ value);
}
/*
0  ->  apple
1  ->  banana
2  ->  tomato
3  ->  cherry
color  ->  [ 'red', 'blue', 'black' ]
*/

// 'in' only returns name/feature/attr/key of Object
// not value of this Object
const obj = { a: "bir", b: "iki", c: "uc", d: "dort" };
for (const key in obj) {
  //console.log(key+ " -> "+ obj.key); //--> right side always is 'undefined'
  //console.log(key+ " -> "+ obj[key]); // works as expected
};
/* output for 2th log
a  ->  bir
b  ->  iki
c  ->  uc
d  ->  dort
*/

/*
CANNOT use plain object with forof loop
use with "Object.keys(), Object.values() or Object.entries()"
*/
for (const key of Object.keys(obj)) {
  //console.log(key+ " -> "+ obj.key); //--> right side always is 'undefined'
  //console.log(key+ " -> "+ obj[key]); // works as expected
}
//console.log(obj.a); // bir
//console.log(obj["a"]); // bir
//console.log(typeof Object.keys(obj));
