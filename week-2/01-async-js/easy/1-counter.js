var t = 0;

var id = setInterval(function () {
  t++;
  console.log(t);
}, 1000);

setTimeout(function () {
  clearInterval(id);
}, 5000);
