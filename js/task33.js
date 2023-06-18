function checkPerfectNumber() {
    let number = parseInt(document.getElementById("inputNumber").value.trim());
    let sum = 0;

    if (number === "" || isNaN(number) || number < 0) {
      document.getElementById("result").innerHTML = "Invalid input. Please enter a valid positive number.";
      return;
    } 

    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }

    if (sum === number) {
      document.getElementById("result").innerHTML = number + " is a Perfect Number.";
    } else {
      document.getElementById("result").innerHTML = number + " is NOT a Perfect Number.";
    }
  }