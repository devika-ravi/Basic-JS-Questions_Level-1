function handleKeyDown(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    document.getElementById('printButton').click(); // Simulate button click
  }
}

function printMultiplicationTable() {
  let number = parseInt(document.getElementById("userInput").value);

  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "";   // Clear previous content

  if (number === "" || isNaN(number)) { 
    resultElement.innerHTML = "Invalid input. Please enter a valid number.";
    return;
  } else {
    for (let i = 1; i <= 10; i++) {
      resultElement.innerHTML += i*number + "<br>";
    }
  }
}