const people = [];



  people.push({name: "Ashley", age: 23});
   people.push({name: "Donovan", age: 47});
    people.push({name: "Lucas", age: 18});


    for (const item of people) {
        console.log(`${item.name} is ${item.age} years old`)
    }