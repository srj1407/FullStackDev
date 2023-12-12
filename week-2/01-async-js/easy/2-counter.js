// var t=0;

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         t++;
//         console.log(t);
//     },1000)
// }//magic remember always it executes in 1second.

var t = 0;
var c = 0;

for (let i = 0; i < 5; i++) {
  t += 1000;
  setTimeout(function () {
    c++;
    console.log(c);
  }, t);
}
