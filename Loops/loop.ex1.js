const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = [];

  // in is index
for (const i in names) {
    people.push({name:names[i] , age:ages[i]});
} 
    console.log(people)