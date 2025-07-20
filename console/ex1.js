
const args  = process.argv.slice(2)
console.log(args)

const [ str1 , oper , str2] = args;

const num1 = Number(str1);
const num2 = Number(str2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both operands must be valid numbers.");
    process.exit(1);
}
 let result;
switch (oper) {
    case "+" :
     result = num1+num2;
     break;

    case "-":
    result = num1-num2;
    break;

    case "*":
        result = num1*num2;
    case "/":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

   default:
        console.log(`Error: Unsupported operator "${oper}". Use +, -, *, /`);
        process.exit(1);
}

console.log(`${num1} ${oper} ${num2} = ${result}`);
