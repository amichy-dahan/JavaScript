let customerType = "regular";    //regular, premium, vip
let purchaseAmount = 350;
let dayOfWeek = 6;

if (customerType === "vip"){
    console.log(purchaseAmount -= purchaseAmount*0.2)
}
if (customerType === "premium"){
    if(dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6){
    console.log(purchaseAmount -= purchaseAmount*0.15)
    }else{
    console.log(purchaseAmount -= purchaseAmount*0.10)
    }
}
if (customerType === "regular"){
    if(purchaseAmount >=100 ){
    console.log(purchaseAmount -= purchaseAmount*0.10)
    }
     if(purchaseAmount >=50 && purchaseAmount <100){
    console.log(purchaseAmount -= purchaseAmount*0.05)
    }else{
        console.log(purchaseAmount)
    }
    
}
