function calculateSimpleInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseInt(document.getElementById("time").value);

    let simpleInterest = (principal * rate * time) / 100;

    document.getElementById("printSimpleInterest").innerHTML = "SIMPLE INTEREST: ₹" + simpleInterest.toFixed(2);
    //The toFixed() method returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place.
}