
function amst (num){


   let sum = 0;
   let type =num;
   let temp = 10;

    while( type!=0){
       sum += ((type%10)**3);
       type=Math.floor(type/temp);
    }
    if(sum.toString().length ==3 && sum == num){
        console.log(sum);
    }else{
       console.log(false); 
    }
}


amst(440);