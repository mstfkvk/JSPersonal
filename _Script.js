/**
 * console.log("mk");
*/



/**
 * let, const, var
 * let text='mustafa';
   console.log(text);
 */
/*
   let a ;
   let b=4;
   let c ='b';
   let d =true;
   let e =null;
   let f=function () {  return  true ;  }
   console.log(typeof a);
   console.log(typeof b);
   console.log(typeof c);
   console.log(typeof d);
   console.log(typeof e);
   console.log(typeof f);
   console.log(typeof (5*'mk')); // nan is an number in here...

*/



/*
let array = new Array(10);
const element=0;
for (let index = 0; index < array.length; index++) {
    array[index]=element+index+1;
}
console.log(array);

let i=0;
while (i<3) {
  if (i != 0) {
     console.log(i); 
  }
i++;
}
*/



/** 
 * In JS, no collection, only have array and map
 * 
 */

/*
let score1 = new Array(); // create a new empty array
let score2 = new Array(10); // create a new array with size 10
let score3 = []; // create a new empty array also
let score4 = new Array(1,3,5,7,9,11); 
let color = ['blue', 'red', 'black'];
*/
/*
color[1] --> get second Element
color.push(9) --> add element  as last
color.unshift('white') --> add element as first

*/
/*
array.forEach(element => {
  
});

for (const value of color) {
  console.log(value);
}*/

// can we add multiple type of data in the array -- yes --
// and array datatype is OBJECT 



// Functions
/**
 * no access modifier
 * no method overloading
 */
/*
function add(a,b) {
  console.log("total is:" + (a+b)); 
}

add(12,13);

function sum(a,b) {
return a + b;  
}
function average(a,b,fn) {
  return fn(a,b)/2;
}

console.log(average(10,20,sum));
*/


//CALLBACK FUNCTIONS(callbackhell)

/* async feature */
/*function waitingForSomeServerToAct() {
  let data = [];
  setTimeout(() => {
    console.log("waiting for server");
  data.push('server');  
  }, 5000);
  return data;
}
  console.log(waitingForSomeServerToAct());
  */

//   function name1() {
//     console.log("mk heyy");
//   }
//  /* solution is callback */
//  function waitingForSomeServerToAct_WithCallBack(callback) {
//   let data = []; 
//   setTimeout(() => {
//     console.log("waiting for server");
//   data.push('server');  
//   callback(data);
//   }, 5000);
//   return data;
// }

  // console.log(waitingForSomeServerToAct_WithCallBack(name1));


  // ARROW FUNCTIONS
/*
  let a = x=> {5*x};
  console.log(a(11));

  let arr= [10,20,30];

  let newArr = arr.map(each => each*2);
  console.log(newArr);
*/

  // varArgs in JS
  /*
  function m(...theArgs) {
    console.log(theArgs.length);
  }

  m();
  m(3);
  m(3,-12);
  m(3,5,7,9,10);

  function multiply(multiplier, ...theArgs) {
    return theArgs.map(each => multiplier* each);
  }

console.log(multiply(-2,0,3,8));

let str1= 'mustafa';
let chars=[...str1];
console.log(chars);
console.log(typeof chars);
*/

//Objects
/*
let m={name:'musty', surname:'kvk', 'country':44};
console.log(m);
console.log(m.name);

// adding element
m.age =31;
console.log(m);

//deleting element
delete m.surname ;
console.log(m);


console.log(m.country);
console.log(m['country']);

m.subjects =['math', 'physics', 'Geo'] ;
console.log(m);

// xxx in yyy -> check if a property exists
for (const key in m) {
console.log(key + "--" + m[key]);
    }


    let v={
     engine: {
        cylinders:4, size:'v8'
      },
      extras : ['AC', 'Cruise control', 'Sound system'],
    drive: function isim(mk) {
      console.log(mk+'s car.');
    }
    }

   console.log( v.drive('mustafa'));
   console.log( v.extras[2]);
   console.log( v.drive.name);
   v.drive('guler');
   */

   // Promises
   /*
   -- promise object in JS can be Pending,Fulfilled or Rejected
   -- JS promise object contains both producer and  consumer code that calls
   */
    
   /*
   let stateOfTheWebPage =  function (state ) {
    return new Promise(function (resolve, reject){
      if(state) {resolve('page is loading');}
      else{reject('page is not loaded');}
    }
   )
   };

   stateOfTheWebPage(true).then((result)=>{
    console.log(result);
   })

    stateOfTheWebPage(false).catch((result)=>{
    console.log(result);
   })
*/

 /*   new Promise(function (resolve, reject) {
resolve(1);
   }).then((result)=>{
    console.log(result);
    return result*2; 
   }).then((result2)=>{
    console.log(result2);
    return result2*2;
   }).catch((result3)=>{
    reject(console.log(result));}
    ) */

let text = 'musty';
let m = ''
let n = ''
text.split('', 4).forEach((a) => {
  //console.log(a + 3);
  m=a.charCodeAt(0)+3
  n=a.charAt(0)+3
}); 

console.log(m);
console.log(n.concat(n.charAt(10)).concat(n.charAt(0)));

function a(number){
  setTimeout(()=>
    console.log(`test ${number}`)
    ,2000
  );
}
let test = a(33);

setTimeout((par1,par2) => {
  console.log(par1+" "+par2)
}, 2000);