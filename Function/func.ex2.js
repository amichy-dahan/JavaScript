function isOdd(num){
    return num % 2 === 1;
}

function ArrOdd(arr){

  for (const element of arr) {
    
         if(isOdd(element)){
            console.log(element)
         }   
    }
}

ArrOdd([1,3,4,2,10,5,6]);