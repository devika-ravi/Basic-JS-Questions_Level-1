function printOneToHundred() {
  
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "";
  
  let n = 1;  //Setting global variable

  printNumbers(n); //Calling recursvive fn printNumbers(), passed parameter n
  return 0;
}
  
function printNumbers(number) {

  if(number <= 100) {
    document.getElementById("result").innerHTML += number + "<br>";
    printNumbers(number+1);  //recursive call or self call till condition is true
      
  }
}