/*
  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
*/


function isPalindrome(line) {
  line = line.toString();
  var newLine = line.split('').reverse().join('');
  console.log("This is newLine", newLine);
  console.log("This is line", line);
  if(newLine === line) {
    return true;
  }
  return false;
}

isPalindrome(12321)