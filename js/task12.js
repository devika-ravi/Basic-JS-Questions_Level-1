function swapNumbers() { 
    let inputOne = parseInt(document.getElementById("firstInput").value.trim());
    let inputTwo = parseInt(document.getElementById("secondInput").value.trim());
    
    if (inputOne === "" || inputTwo === "" || isNaN(inputOne) || isNaN(inputTwo)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid numbers.";
        return;
    } else {
        let temp = inputOne ;
        inputOne = inputTwo ;
        inputTwo = temp ; 
        document.getElementById("result").innerHTML = "After swapping: <br> \n First Number = " + inputOne + "<br> \n Second Number = " + inputTwo;
    }
}