function printSumOfNaturalNumbers() {
    let numberN = parseInt(document.getElementById("userInput").value);
  
    let resultElement = document.getElementById("result");
    // resultElement.innerHTML = "";   // Clear previous content
  
    if (numberN === "" || isNaN(numberN) || numberN<1) { 
      resultElement.innerHTML = "Invalid input. Please enter a valid positive number greater than or equal to '1'.";
      return;
    } else {
        let result = 0;
        for (let i = 1; i <= numberN; i++) {
            result+=i;
        }    
        resultElement.innerHTML = "Sum of first " + numberN + " natural numbers is: " + result;
    }
}
  
function printAverageOfNaturalNumbers() {
    let numberN = parseInt(document.getElementById("userInput").value);
  
    let resultElement = document.getElementById("resultTwo");
  
    if (numberN === "" || isNaN(numberN) || numberN<1) { 
        resultElement.innerHTML = "Invalid input. Please enter a valid positive number greater than or equal to '1'.";
      return;
    } else {
        let sum = 0;
        // let count = 1;
        for (let i = 1; i <= numberN; i++) {
            sum += i;
            result = (sum/i);
            // count++;
        }
        resultElement.innerHTML = "Average of first " + numberN + " natural numbers is: " + result;      
    }
} 