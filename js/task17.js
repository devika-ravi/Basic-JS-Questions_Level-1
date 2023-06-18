function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('checkButton').click(); // Simulate button click
    }
}

function checkPrimeOrNot() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());

    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        
        // Numbers less than 2 are not prime
        if (number<2){
            document.getElementById("result").innerHTML = "'" + number + "' is NOT a prime number!!!!";
            return;
        }

        // Divisibility check by numbers from 2 to sqrt(number)
        for (let i = 2 ; i <= Math.sqrt(number) ; i++) {
            if (number % i === 0){
                document.getElementById("result").innerHTML = "'" + number + "' is NOT a prime number!!!!";
                return;
            }
        }

        // This means the loop completes without finding any divisors,so it is a prime number
        document.getElementById("result").innerHTML = "'" + number + "' is a prime number!!!!";        
    }
}  