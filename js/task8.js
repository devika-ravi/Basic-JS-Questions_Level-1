function addition() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    
    document.getElementById("sum").innerHTML = "SUM: " + (number1 + number2) ;
}

function subtraction() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    
    document.getElementById("difference").innerHTML = "DIFFERENCE: " + (number1 - number2) ;
}

function multiplication() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    
    document.getElementById("product").innerHTML = "PRODUCT: " + (number1 * number2) ;
}

function division() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    
    document.getElementById("quotient").innerHTML = "QUOTIENT: " + (number1 / number2) ;
}

function reloadPage() {
    location.reload();
}