do {
    var firstValue = +prompt("Enter first number");
    var secondValue = +prompt("Enter second number");
    var choseAction = prompt("What to do: +, -, / or * ? ");

    switch (choseAction) {
        case "+": {
            var result = firstValue + secondValue;
            break;
        }

        case "-": {
            result = firstValue - secondValue;
            break;
        }
        case "/": {
            result = firstValue / secondValue;
            break;
        }
        case "*": {
            result = firstValue * secondValue;
            break;
        }
        default:
            break;
    }

  var nextAction=prompt("The result is - "+ result + " Continiue?")

} while (nextAction != null);