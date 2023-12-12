/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
function waitOneSecond(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function waitTwoSecond(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function waitThreeSecond(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const ti = new Date();
  return Promise.all([
    waitOneSecond(t1),
    waitTwoSecond(t2),
    waitThreeSecond(t3),
  ]).then(function (res) {
    const tf = new Date();
    return tf - ti;
  });
}

module.exports = calculateTime;
