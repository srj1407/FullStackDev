/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1.hasOwnProperty(str1[i])) {
      obj1[str1[i]]++;
    } else {
      obj1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj2.hasOwnProperty(str2[i])) {
      obj2[str2[i]]++;
    } else {
      obj2[str2[i]] = 1;
    }
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
