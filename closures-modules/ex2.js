const Bank = function(){
     let x= 500;

     function depositCash (cash){
             x += cash;
     }

   function checkBalance(){
    
     console.log(x);
   }
  return{

    deposit : depositCash,
    showBalance : checkBalance
  }
}


module.exports = {Bank}