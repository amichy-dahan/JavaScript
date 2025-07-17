const UniqueArray = require("./ex1");


const uniqueStuff = new UniqueArray()
uniqueStuff.add({name:"toy"})
uniqueStuff.add({name:"toy"})
uniqueStuff.add({name:"toy"})
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists({name:"toy"})) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(0)) //prints "hydrogen"