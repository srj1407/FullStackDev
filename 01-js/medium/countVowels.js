/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let r = 0;
  for (let i = 0; i < str.length; i++) {
    let x = str[i].toLowerCase();
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
      r++;
    }
  }
  return r;
}

module.exports = countVowels;
