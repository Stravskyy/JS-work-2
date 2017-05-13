var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var sum = +"";

if (firstNumber <= secondNumber) {
    for(sum=firstNumber; firstNumber <= secondNumber; firstNumber++)
        sum=sum+firstNumber;
}

else if (firstNumber>=secondNumber){
    for(sum=secondNumber; firstNumber>=secondNumber; firstNumber--)
        sum=sum+firstNumber;
}

alert(sum);

/*

do {
    if (firstNumber <= secondNumber) {
        sum += firstNumber;
        firstNumber++;
    }
    else if (firstNumber>=secondNumber){
        sum +=firstNumber;
        firstNumber++;
    }

} while (firstNumber <= secondNumber || firstNumber>=secondNumber);

alert(sum);


*/
