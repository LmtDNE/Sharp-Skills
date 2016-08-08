function GetSum( a,b )
{
   //Good luck!
   var max = Math.max(a, b);
   var min = Math.min(a, b);
   console.log(min);
   var total = min;
   if( a === b) {
      return a;
   }else {
     for(var i = min; i < max; i++) {
      total += i + 1;
     }
   }


   return total;
}


console.log(GetSum(0, -1));