const coffeeShop = {
  beans: 40,
  money:400
  ,
  beansCost: 5,

  buyBeans : function(numBeans){
      this.money -= (this.beansCost * numBeans);
      console.log(this.money)
  },
    buyDrink: function(drinkType){
      this.money += this.drinkRequirements[drinkType].price;
      console.log(this.money)
      this.makeDrink(drinkType)
  }
  ,
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if(!this.drinkRequirements[drinkType]){
     console.log("Sorry, we don't make filtered")
    }
    else{
        if(this.beans > this.drinkRequirements[drinkType].beanRequirement){
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
        console.log(this.beans)
        }else{
             console.log("Sorry, we're all out of beans")
        }
    }
  }
}

coffeeShop.buyDrink("latte"); 


coffeeShop.buyBeans(5); 