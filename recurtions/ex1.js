 function findFactorial(num , sum = 1){
   if (num==1){return sum}

   sum *= num;
   num--;

  return findFactorial(num , sum)
 }


 const res = findFactorial(20)

 console.log(res)