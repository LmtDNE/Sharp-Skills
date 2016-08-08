//Make a pure function bar(..) to wrap around the impure function foo(..).

function bar(x, y) {
  
  var z;

  foo(x);

  function foo(x) {
      y++;
      z = x * y;
  }
  
  return [y, z];
}


bar(20, 5); //[6, 120]
z;      //120

bar(25, 6); //[7, 175]
z;     //175