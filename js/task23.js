function printFactors() {
    let number = parseInt (document.getElementById("userInput").value.trim());

    console.log(number, "number");
  
    if (number === "" || isNaN(number)) { 
      document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
      return;
    }
  
    let resultElement =  document.getElementById("result");
    resultElement.innerHTML = "" ;
    let factors = 0;

    for (let i = 1; i <= number ; i++) {
        if (number % i === 0) {
            factors = (factors + i) + ", ";
            console.log (factors, "factors")
          }
    }

    if (factors===0){
        resultElement.innerHTML = "No factors found for the number '" + number + "' :(";
        return;
    } else {
        resultElement.innerHTML = "Factors of the number '" + number + "':  " + factors;
    } 
}







          

  
//     let factors = [];
  
//     //To find
//     for (let i = 1; i <= number ; i++) {
//         console.log(i,"i");
//       if (number % i === 0) {
//         factors.push[i];
//         console.log(factors, "factor");
//       }
//     }
  
//     //To print
//     if (factors.length > 0) {
//       resultElement.innerHTML = "Factors of the number '" + number + "':" + factors.join(", ");
//     } else {
//       resultElement.innerHTML = "No factors found for the number '" + number + "' :(";
//     }
// }