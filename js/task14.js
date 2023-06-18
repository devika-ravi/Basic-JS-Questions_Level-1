function findSumOfDigits() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    
    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        let sum = 0;
        let value = number;

        while (value) {
            sum += value % 10;
            value = Math.floor (value / 10) ;   //Math.floor round the decimal to nearest number (largest integer less than or equal to the number).
        }
        document.getElementById("result").innerHTML = "Sum of all digits of number '"  + number +  "' = " + sum;
    }
}