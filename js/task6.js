function calculateCompoundInterest(){
                 
    // Changing type of userInput
    let principal = parseFloat(document.getElementById("pAmount").value);
    let years = parseInt(document.getElementById("tYears").value);
    let interestRate = parseFloat(document.getElementById("iRate").value);

    // Convert interest rate to decimal: n/100
    interestRate = interestRate / 100;

    // Calculate amount: A = P (1 + r/100) ^ n
    let amount = principal * Math.pow(1 + interestRate, years); //let amount = principal * ((1 + interestRate) ** years); 
    console.log (amount, "devika")

    // Calculate Compound Interest: CI = A - P
    let compoundInterest = amount - principal;

    document.getElementById("result").innerHTML = "Compound Interest (CI) = ₹" + compoundInterest.toFixed(2) ; 
    //The toFixed() method returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place.
}      
