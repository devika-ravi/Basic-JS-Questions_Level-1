function printSumOfEvenNumbers() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());

    let resultElement = document.getElementById("result");
    
    if (number === "" || isNaN(number) || number < 0) { 
        resultElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    
    result = 0;

    for (let i = 1 ; i <= number ; i++ ){
        result += i * 2 ;
    } 
    
    resultElement.innerHTML = result;
}

function printSumOfOddNumbers() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());

    let resultElement = document.getElementById("resultTwo");
    
    if (number === "" || isNaN(number) || number < 0) { 
        resultElement.innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    
    result = 0;

    for (let i = 1 ; i <= number ; i++ ){
        result = ( result + i * 2 ) - 1;
    } 
    
    resultElement.innerHTML = result;
}