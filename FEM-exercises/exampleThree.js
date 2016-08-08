/*
  FEM Recursion Notes:
  Recursion -  A base case that stops the function and function call to invoke itself
  Mutual Recursion - Two or more functions calling each other to reach a base case

*/

//loop over three numbers

function threeLoop (number) {

  if(number <= 0) {
    return number
  }
  threeLoop(number - 1);
  // console.log(number);
};

threeLoop(3);


/*
  Turn mult(..) into a recursive function that can work on as many arguments as necessary
*/

function mult(x,y,z) {
  return x * y * z;
};

function mult2 (...args) {

  if(args.length <= 2) {
    return args[0] * args[1];
  }
  return args[0] * mult2(...args.slice(1));

}

console.log(mult2(3,4,5,6,9,300));



console.log(mult(3,4,5));


