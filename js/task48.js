function countNumberOfDigits() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    
    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        let numberToStringToArray = number.toString().split("");
        let counter = 0;

       for (let i=1; i<=numberToStringToArray.length; i++) {
        counter++;
       }
        document.getElementById("result").innerHTML = "There are '" + counter + "' digits in the number you entered!";
    }
}