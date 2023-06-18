function checkLeapYearOrNot() { 
    let input = parseInt(document.getElementById("userInput").value.trim());
    
    if (input === "" || isNaN(input)) { //Or: if (input === "" || input.includes(" ")){ 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        if (((input % 400) === 0) || ((input % 4) === 0 && (input % 100))) {
            document.getElementById("result").innerHTML = 'Year "' + input + '" is a leap year!' ;
        } else {
            document.getElementById("result").innerHTML = 'Year "' + input + '" is a NOT leap year!' ;
        }
    }
}

