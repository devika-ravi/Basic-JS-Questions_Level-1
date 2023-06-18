function calculate() {
    let number1 = parseInt(document.getElementById("num1").value.trim());
    let number2 = parseInt(document.getElementById("num2").value.trim());
    let option = parseInt(document.getElementById("num3").value.trim());

    if (number1 === "" || number2 ==="" || option ==="" || isNaN(number1) || isNaN(number2) || isNaN(option)){
        document.getElementById("result") = "Invalid Input!" ;
        return;
    }

    switch (option) {
        case 1: document.getElementById("result").innerHTML = "SUM: " + (number1 + number2) ;
        break;
        case 2: document.getElementById("result").innerHTML = "DIFFERENCE: " + (number1 - number2) ;
        break;
        case 3: document.getElementById("result").innerHTML = "PRODUCT: " + (number1 * number2) ;
        break;
        case 4: document.getElementById("result").innerHTML = "QUOTIENT: " + (number1 / number2) ;
        break;
        case 5: document.getElementById("result").innerHTML = "REMAINDER: " + (number1 % number2) ;
        break;
        default: document.getElementById("result").innerHTML = "Enter a valid option!"
    }
    
    document.getElementById("sum").innerHTML = "SUM: " + (number1 + number2) ;
}



function reloadPage() {
    location.reload();
}