const assert = require('assert');

function palindromeCheck(str) {

  let letterCounts = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0
  };
  for(let i = 0; i < str.length; i++) {
    letterCounts[str[i]] += 1;
  }
  let numOfOdds = 0;
  
  for(let letter in letterCounts) {
    // console.log(letterCounts[letter]);
    if(letterCounts[letter] % 2 != 0) {
      numOfOdds++;
    }
  }
  if (numOfOdds > 1) {
    return false;
  } else {
    return true;
  }
}

assert.strictEqual(typeof palindromeCheck, 'function');
assert.strictEqual(palindromeCheck.length, 1);
assert.strictEqual(palindromeCheck('ababzbabzbab'), true);
assert.strictEqual(palindromeCheck('zae'), false);