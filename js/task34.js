function checkPrimeOrNot() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    
    if (number === "" || isNaN(number) || number < 0) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid positive number.";
        return;
    } 
    
    if(number == 0 || number == 1){
        document.getElementById ("result").innerHTML = number + " is neither prime nor composite!";
    } else {
        let count = 0 ;

        for (let i = 1 ; i <= number ; i++){
            if (number % i == 0) {
                count++;
            }
        }

        const condition = (count == 2) ? document.getElementById("result").innerHTML = number + " is a Prime Number" : document.getElementById("result").innerHTML = number + " is NOT a Prime Number (Composite)";

        // if (count == 2) {
        //     document.getElementById("result").innerHTML = number + " is a Prime Number";
        // } else {
        //     document.getElementById("result").innerHTML = number + " is NOT a Prime Number (Composite)";
        // }
    }
}