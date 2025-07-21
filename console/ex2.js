import promptSync from "prompt-sync";
const prompt = promptSync();




const qiz = ["What is 2 + 2?" , "What is the capital of France?" , "What year is it?"];
const ans =["4" , "paris" , "2025"]
let cal = 0;

for (let index = 0; index < qiz.length; index++) {
        const q = prompt(qiz[index]);
        if (q === ans[index]) {
            cal++;
        }

        
}
console.log(` Final Score: ${cal}/${qiz.length} correct!`)