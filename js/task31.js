function findProductOfDigits() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    
    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        let numberToStringToArray = number.toString().split("");
        result = 1;

        for (let i=0; i<numberToStringToArray.length ; i++){
            result*= parseInt(numberToStringToArray[i]);
        }

        document.getElementById("result").innerHTML = result;

    }
}