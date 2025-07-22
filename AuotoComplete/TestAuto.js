const AutoCompleteTrie = require("./AutoCompleteTrie");
const readline = require("readline");



const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let trie = new AutoCompleteTrie();
trie.addWord("amihai")
trie.addWord("cat")
trie.addWord("car")
trie.addWord("card")
trie.addWord("care")
trie.addWord("caresdssd")

console.log("=== AutoComplete Trie Console ===")
console.log("Type 'help' for commands")

showHelp();
askUser()

function showHelp (){
   console.log( `Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`

   )

}
function askUser() {
    rl.question(">> ", (input) => {
        processCommand(input);
        askUser(); // המשך בלולאה
    });
}

function processCommand(input){
    const [command, ...args] = input.trim().split(" ");
    const arg = args.join(" ").trim();

    switch (command.toLowerCase()) {
        case "add":
              if(arg){
                trie.addWord(arg);
                console.log(`✓ Added ${arg} to dictionary`)
                
              }
            break;
        case "complete":
             if (arg) {
                const found = trie.predictWords(arg);
                console.log(`Suggestions for ${arg}:`)
                for (const element of found) {
                    console.log(`${element},`)
                    }
                }
               
                break;
        case "find":
            if (arg) {
                const found = trie.findWord(arg);
                if(found){
                    console.log(`✓ ${arg} exists in dictionary`)
                }else{
                     console.log(`X ${arg} not exists in dictionary`)
                }
            }
            
            break;

         case "help": 
         
         showHelp();
         break;
         case "exit":
            try{
                   console.log("Goodbye!");
            rl.close();
           
            }catch{

            }
        default:
            break;
    }
}



// a.addWord("amihai")
// a.addWord("cat")
// a.addWord("car")
// a.addWord("card")
// a.addWord("care")
// a.addWord("caresdssd")



// console.log(a.findWord("card"));
// console.log(a.predictWords("car"));

// console.log(a.predictWords("c"))