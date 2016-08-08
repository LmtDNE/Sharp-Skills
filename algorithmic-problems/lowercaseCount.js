/*
  Your task is simply to count the total number of lowercase letters in a string.
*/

function lowercaseCount(str){
    //How many?
    len = str.length;

    return len - str.replace(/[a-z]/g, "").length;
}


console.log(lowercaseCount("ThIs Is A Test On HOW tO counT UppeR CaSE"));
