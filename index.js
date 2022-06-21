let num1 = +prompt("Enter first value: ");
let num2 = +prompt("Enter second value: ");
const operator = prompt("Enter your Operator +,-,* or /");

if(operator == '+'){
    alert(num1 + num2)
} else if(operator == '-'){
    alert(num1 - num2)
} else if(operator == '*'){
    alert(num1 * num2)
} else if(operator == '/'){
    alert(num1 / num2)
}