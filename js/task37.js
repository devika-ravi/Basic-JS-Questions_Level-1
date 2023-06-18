function printEvenNumbers() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    
    if (number === "" || isNaN(number) || number < 0) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    
    let resultElement = document.getElementById("result");

    resultElement.innerHTML = "" ;

    for (let i = 1 ; i <= number ; i++ ){
        if (i % 2 == 0){
            resultElement.innerHTML += i + "<br>";
        }
    }
}