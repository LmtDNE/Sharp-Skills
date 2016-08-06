function highAndLow(numbers){
  // ...
  var numbersArry = numbers.split(" ");
  var max = 0; 
  var min = undefined;
  for(var i = 0; i < numbersArry.length; i++){
    if(parseInt(numbersArry[i]) > max){
      max = numbersArry[i];
      // console.log(max);
    }else if (parseInt(numbersArry[i]) < min || min === undefined) {
      min = numbersArry[i];
    }
  }
  return [max, min].join(" ");
}