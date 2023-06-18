function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('checkButton').click(); // Simulate button click
    }
}

function findFirstAndLastDigit() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());

    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } 
    
    let numberToStringToArray = number.toString().split("");
        
    document.getElementById("result").innerHTML = "First digit of the number: " + parseInt(numberToStringToArray[0]) +
    "<br>Last digit of the number:"+ parseInt(numberToStringToArray[numberToStringToArray.length-1]);    
}  