const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (const key in dictionary) {
     console.log(`Words that begin with ${key}:`);
    for (const element of dictionary[key]) {
        console.log(element)
    }
}

