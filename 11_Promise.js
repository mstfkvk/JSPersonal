

/**
 * A Promise is in one of these states:
 * pending,fulfilled,rejected
 * 
 * then(), catch(), finally()
 */

/*
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
        .catch((e) => console.error(`Critical failure: ${e.message}`));
*/

const v = new Promise((resolve, reject) => {
  resolve();
  reject();
});
v.then((r) => {
  
  console.log(r);
});



const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});