const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]


const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is an ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeProfession(person.profession)
  summary +=`from ${capitalize(person.city)}, ${capitalize(person.country)}.`
  summary += `${capitalize(person.name)} loves to say " ${capitalizeCatchphrase(person.catchphrase)}"`
  console.log(summary)
}

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const getAge = function(age) {
  let strAge =""
    if(age> 55){
        strAge+='55+';
    }else if (age< 21){
         strAge+='Underage';
    }else{
      strAge = age;
    }
    
        return strAge;
}

const capitalizeProfession = function(str){
let strP =""
let words = str.split(" ");

for (const element of words) {
    console.log(element)
strP += element[0].toUpperCase()      // first letter, capitalized
strP += element.slice(1) 
strP+=" "
}
return strP
}

const capitalizeCatchphrase = function(str){
    let strcapital =str[0].toUpperCase();
    strcapital += str.slice(1);
return strcapital
}



for (const element of people_info) {
    getSummary(element)
}