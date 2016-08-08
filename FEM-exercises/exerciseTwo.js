/*
  Define foo(..) so that it produces a ducntion which remembers only the first two argumments that were passed to foo(..), and always add them together
*/

function foo(x, y) {
  return function () {
    return x + y;
  }
};

var remember = foo(2,2);

console.log(remember());