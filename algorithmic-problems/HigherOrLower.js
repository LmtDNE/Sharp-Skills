function highAndLow(numbers){
  // ...
  var numbersArry = numbers.split(" ");
  var max = Math.max.apply(null, numbersArry); 
  var min = Math.min.apply(null, numbersArry);
  
  return [max, min].join(" ");
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));