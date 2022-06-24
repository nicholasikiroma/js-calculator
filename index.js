let operation = prompt('Enter operator ( either +, -, *, or / ): ');

let num1 = prompt('Enter first number: ');
let num2 = prompt('Enter second number: ');


if (operation == '+') {
    result = Number(num1) + Number(num2);
    alert(result)
}

else if (operation == '-') {
    result = Number(num1) - Number(num2);
    alert(result);
}

else if (operation == '*') {
    result = Number(num1) * Number(num2);
    alert(result);
}

else {
    result = Number(num1) / Number(num2);
    alert(result);
}

