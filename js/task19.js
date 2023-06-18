function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('printButton').click(); // Simulate button click
    }
}

function printCorrespondingDay() {
    let number = parseInt(document.getElementById("inputNumber").value);

    const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  //Index numbering starts from 0
    
    if (number >= 1 && number <= 7) {
        let day = daysInWeek[number - 1];
        document.getElementById("result").innerHTML = "The corresponding day is: " + day;
      } else {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a number between 1 and 7.";
      }
}