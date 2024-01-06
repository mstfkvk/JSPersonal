// function firstName() {
//   setTimeout(() => {
//     return "mustafa";
//   }, 3000);
// }
// function surname() {
//   setTimeout(() => {
//     return "kavak";
//   }, 1500);
// }

// function getFullName(callback1, callback2) {
//         let n=callback1();
//         let s=callback2();
//   console.log(`Fullname is ${n} ${s}`);
// }

// getFullName(firstName,surname);

//--------------------------------
function firstName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mustafa");
    }, 3000);
  });
}

function surname() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("kavak");
    }, 1500);
  });
}

function getFullName(callback1, callback2) {
  const firstNamePromise = firstName();
  const surnamePromise = surname();

  Promise.all([firstNamePromise, surnamePromise])
    .then(([firstName, surname]) => {
      console.log(`Fullname is ${firstName} ${surname}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getFullName();
