

const readline = require("readline");



const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let balance = 100;
console.log("=== Banking System ===")


showHelp();
askUser();


function showHelp (){
   console.log( `
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit

 ` )
   }

function askUser() {
  rl.question("Choose option (1-4): ", (input) => {
    processCommand(input.trim());
  });
}

function processCommand(input){
    switch (input.toLowerCase()) {
        case "1":
                console.log(`Your balance is: $${balance}`);
                askUser();
            break;
        case "2":
                 rl.question("Enter Amound To desopite : $", (amount)=> {
                  const desopit = parseFloat(amount);
                  if (isNaN(desopit) ||desopit <= 0) {
                    console.log("invalid");
                  }else{
                    balance += desopit;
                    console.log(`New balance: $${balance}`);
                  }
                  askUser();
                 })
            break;
        case "3":
                rl.question("Enter amount to withdraw: $", (amount) => {
                const withdrawAmount = parseFloat(amount);
                if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                console.log("Invalid amount!");
                } else if (withdrawAmount > balance) {
                console.log("Insufficient funds!");
                } else {
                balance -= withdrawAmount;
                console.log(`New balance: $${balance}`);
                }
                askUser();
            });
            break;

        case "4": 
        
             console.log("Exiting. Have a nice day!");
                rl.close();
            return;

                default:
             console.log("Invalid option, please choose 1-4.");
        
    }
    askUser();
}

