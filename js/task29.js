function printDivisibleNumbers() {
    let number = parseInt(document.getElementById("userInput").value.trim());
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "" ;

    let divisibleNumbers = 0;

    if (number==="" || isNaN(number) || number <0){
        resultElement = "Enter a valid positive number";
        return;
    }
  
    for (let i = 1; i <= number; i++) {
      if (i % 5 === 0 && i % 11 === 0) {
        divisibleNumbers  = (divisibleNumbers + i) + "<br>";
      }
    }

    resultElement.innerHTML += "Numbers divisible by 5 & 11: <br>" + divisibleNumbers;
  }