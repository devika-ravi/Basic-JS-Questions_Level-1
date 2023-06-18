let numbersVisible = false;

function printOneToHundred() {
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = ""; // Clear previous content

  resultElement.classList.toggle("hidden");

  if (resultElement.classList.contains("hidden")){
    resultElement.innerHTML = "" ;
  } else {
    for (let i = 1; i <= 100; i++) {
        resultElement.innerHTML += i + "<br>";
      }
  }
}