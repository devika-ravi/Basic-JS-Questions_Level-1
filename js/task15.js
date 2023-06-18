function reverseTheNumber() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());

    if (number === "" || isNaN(number)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        return;
    } else {
        let reversedNumber = parseInt(number.toString().split("").reverse().join(""));
        document.getElementById("result").innerHTML = reversedNumber;
        
    }
}