const readline = require('readline');  // CommonJS - NodeJS

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name?\n", fname => {
    rl.question("What is your Email?\n", email => {
        rl.question("What is your Age?\n", age => {
            rl.question("What is your Favorite Color?\n", color => {
                console.log(`\nRegistration Summary:`);
                console.log(`Name: ${fname}`);
                console.log(`Email: ${email}`);
                console.log(`Age: ${age}`);
                console.log(`Favorite Color: ${color}`);
                
                rl.close();
            });
        });
    });
});

