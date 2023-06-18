function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('printButton').click(); // Simulate button click
    }
  }
  
  function printFactorial() {
    let number = parseInt(document.getElementById("userInput").value);
  
    let resultElement = document.getElementById("result");
    
    if (number === "" || isNaN(number)) { 
      resultElement.innerHTML = "Invalid input. Please enter a valid number.";
      return;
    } 
    
    let factorial = 1;

    for (let i = 1; i <= number ; i++){
        factorial *= i;
    }
    resultElement.innerHTML = number + "! = " + factorial;
  }