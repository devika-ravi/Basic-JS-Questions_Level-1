function checkOddEven() {
    let number =  parseInt (document.getElementById("userInput").value.trim());

    if (number === "" || isNaN(number)) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return; //This return is very very important!!!
    } else {
        if (number % 2 == 0) {
            document.getElementById("result").innerHTML = number + " is an even number.";
        } else {
            document.getElementById("result").innerHTML = number + " is an odd number.";
        }
    }
}
