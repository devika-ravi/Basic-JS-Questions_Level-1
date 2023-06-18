function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('printButton').click(); // Simulate button click
    }
  }
  
  function printOddNaturalNumbers() {
    let numberN = parseInt(document.getElementById("userInput").value);
  
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";   // Clear previous content
  
    if (numberN === "" || isNaN(numberN) || numberN<1) { 
     resultElement.innerHTML = "Invalid input. Please enter a valid positive number greater than or equal to '1'.";
      return;
    } else {
      for (let i = 1 ; i <=numberN; i++) {
        if (i % 2 != 0) {
            resultElement.innerHTML += i + "<br>";
        } 
      }
    }
  }