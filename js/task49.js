function printFibonacciSeries() {
  let number = parseInt(document.getElementById("userInput").value.trim());

  if (isNaN(number) || number === "") {
    document.getElementById("result").innerHTML = "Please enter a valid positive number.";
    return;
  } 

  let fibonacciSeries = "";

    if (number >= 1) {
      fibonacciSeries += "0";
    }

    if (number >= 2) {
      fibonacciSeries += ", 1";
    }

    if (number > 2) {
      let num1 = 0;
      let num2 = 1;

      // Generate the Fibonacci series starting from the third number
      for (let i = 3; i <= number; i++) {
        let num3 = num1 + num2;
        fibonacciSeries += ", " + num3;
        //Swapping Method
        num1 = num2;
        num2 = num3;
      }
    }

    // Display the Fibonacci series
    document.getElementById("result").innerHTML = fibonacciSeries;

}