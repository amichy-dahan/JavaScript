
function reverseString(str , x="" ) {
 
 if(str.length ==0){return x}
    x+= str.slice(str.length -1)[0];
  str =str.slice(0, str.length-1)
 

 return reverseString(str,x);
}

const res = reverseString("snief")
console.log(res)