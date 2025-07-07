let year = 2000;

if(year % 4 === 0){
  if(year % 100 === 0){
       if(year % 400 ===0){
        
        console.log("leap")

       }else{
         console.log("no leap")
       }

  }else{
     console.log("leap")
  }

}else{
    console.log("no leap")

}


