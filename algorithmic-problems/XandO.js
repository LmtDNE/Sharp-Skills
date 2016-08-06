/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

var XO = function(string) {
  var x = 0;
  var o = 0;

  for(var i = 0; i < string.length; i++){
    if(string.charAt(i).toLowerCase() === 'x') {
      x+=1;
    }else if (string.charAt(i).toLowerCase() === 'o') {
      o+=1;
    }
  }
  if(x === o){
    return true;
  }else {
    return false;
  }
};


//Alternative solution

var XO = function(str) {
  str = str.toLowerCase().split('');
  return str.filter(function(chr){ chr === 'x'}).length === str.filter(function(chr){ chr === 'o'}).length;
}

console.log(XO("zpzpzpp"));
