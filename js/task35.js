function checkPositiveNegative() {
    let number =  parseInt (document.getElementById("userInput").value.trim());

    resultElement =  document.getElementById("result");

    if (number === "" || isNaN(number)) {
        resultElement.innerHTML = "Invalid input. Please enter a valid number.";
        return; 
    } 
    
    if (number < 0) {
        resultElement.innerHTML = number + " is a Negative number!";
    } else if (number > 0) {
        resultElement.innerHTML = number + " is a Positive number!";
    } else {
        resultElement.innerHTML = number + " is Neither positive nor negative!";
    }
}
