
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}


const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;

if (hasOven === true && works === true){
    console.log(`${kitchen.owner} ${kitchen.fridge.items[1].name} expired ${ date- kitchen.fridge.items[1].expiryDate} day ago
         Werid cons,ds... her fridge works , lucly she has an oven to cook the radish in.`)
}

if (hasOven === false && works === true){
    console.log(`${kitchen.owner} ${kitchen.fridge.items[1].name} expired ${ date- kitchen.fridge.items[1].expiryDate} day ago
         Werid cons,ds... her fridge works , Too bad she doesn't have an oven to cook the radish in..`)
}
if (hasOven === true && works === false){
    console.log(`${kitchen.owner} ${kitchen.fridge.items[1].name} expired ${ date- kitchen.fridge.items[1].expiryDate} day ago
         Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
}
if (hasOven === false&& works === false){
    console.log(`${kitchen.owner} ${kitchen.fridge.items[1].name} expired ${ date- kitchen.fridge.items[1].expiryDate} day ago
        Too bad she doesn't have an oven to cook the radish in,  Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
}

