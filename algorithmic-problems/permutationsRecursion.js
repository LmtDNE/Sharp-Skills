/*
  List all permutations of the string given. Implement this using recursion
*/

var permutation = function(string) {
  var strCopy = string.split("");

  var result  = [];
  var temp;

  var subroutine = function(array) {
    if(array.length === 0){
      return;
    }else {
      temp = strCopy.shift();
      result.push(temp);
      
      subroutine(strCopy);
    }
  }
  subroutine(strCopy);
  return result.join('');

}


console.log(permutation("abc"));