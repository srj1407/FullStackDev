/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, n * 1000);
  });
}

// wait(2000).then(function (data) {
//   console.log(data);
// });

// async function callwait() {
//   const res = await wait(2000);
//   console.log(res);
// }

// callwait();

module.exports = wait;
