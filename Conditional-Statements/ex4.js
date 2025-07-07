let usernameLength = 5;
let passwordLength = 8;
let userAge = 20;


if( usernameLength>= 5 && passwordLength >=8 && userAge > 13){
    console.log("conected")
}else{
 if (usernameLength < 5){
    console.log("short username");
    
}
 if (usernameLength < 8){
    console.log("short pass");
  
}
 if(userAge < 13){   
     console.log("littel age");
    }
}