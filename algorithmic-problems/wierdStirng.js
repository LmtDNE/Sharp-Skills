/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
*/

function toWeirdCase(string){
  //TODO
  return string.split(' ').map(function (word) {
    var index = 0;
    return word.split('').map(function (letter, index) {
      if (index === 0 || index % 2 === 0) {
        index++;
        return letter.toUpperCase();
      }
      index++;
      return letter.toLowerCase();
    }).join('');
  }).join(' ');
}


console.log(toWeirdCase('This is a test'));