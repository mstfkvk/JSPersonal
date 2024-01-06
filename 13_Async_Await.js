// 'async' returns a promise
/*
async function t() {
  return "hello world"
}

t()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/

// if you used 'await' keyword front of the any sentence, functions which includes this sentence should be 'async' as well

// ---------------------------------------------------------

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

// async function expression used as an IIFE (Immediately Invoked Function Expression)
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});

//----------------------------------------------------------


// async function getComment(url1, url2) {
//   const request = await fetch(url1);
//   const response = await request.json();
//   console.log(response.id);
//   const reqComments = await fetch(url2 + response.id);
//   const comments = await reqComments.json();
//   const s = Object.keys(comments);
//   Object.values(comments).forEach((e) => {
//     console.log(e.email);
//   });
//   const a = Object.values(comments).map((e) => {
//     return e.name;
//   });
//         console.log(s);
//         console.log(a);
// }
// getComment(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/comments?postId="
// );
