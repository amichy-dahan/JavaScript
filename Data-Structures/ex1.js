class UniqueArray {

constructor (item){
this.item = item;
this.cart =[];
}

add(item) {

if(this.cart.length ===0){
    this.cart.push(item);
}else if (typeof item === "object" ){
         if(this.cart.some(a => a.name ===item.name)){
            
         }
} else if (this.cart.some(a => a ===item)){

}else{
  this.cart.push(item);

}

}
showAll(){

    console.log(this.cart);
}

exists(str){
if (this.cart.some(a => a.name === str.name)){
    return true;
}else{
    return false;
}

}

get(num){

    for (let i = 0; i < this.cart.length; i++) {
   
        if(i === num){
           return this.cart[i]
        }
            
        
     
   }
}

}





module.exports = UniqueArray;