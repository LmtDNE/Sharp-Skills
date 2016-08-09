/*
  Write a function to return a string containing all except the first and last characters, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.

Arrays are joined by adding a single space between each consecutive array element.
*/

function array(arr){

  newArr = arr.replace(/,/g, "");
  newArr = newArr.split("");

  if(arr.length <= 4){
    return null
  }else{
    newArr = newArr.splice(1);
    newArr = newArr.splice(0, newArr.length-1);
  }


  return newArr.join("");
}


console.log(array('1,3'));