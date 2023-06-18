function findPower() {
    let base = parseInt(document.getElementById("baseNumber").value.trim());
    let exponent = parseInt(document.getElementById("exponent").value.trim());
    
    if (base === "" || exponent === "" || isNaN(base) || isNaN(exponent)) { 
        document.getElementById("result").innerHTML = "Invalid input. Please enter 2 valid numbers.";
        return;
    } else {
        document.getElementById("result").innerHTML = base + " ^ " + exponent + " = " + Math.pow(base,exponent);
    }
}

//WITHOUT USING BUILT-IN PROPERTY
// function findPower() {
//     //Get the value entered by the user
//     let base = parseInt(document.getElementById("baseNumber").value.trim());
//     let exponent = parseInt(document.getElementById("exponent").value.trim());
    
//     if (base === "" || exponent === "" || isNaN(base) || isNaN(exponent)) { 
//         document.getElementById("result").innerHTML = "Invalid input. Please enter 2 valid numbers.";
//         return;
//     } else {
//         let result = 1;

//         for (let i = 0 ; i < exponent ; i++ ) {
//             result *= base ;
//         }
//         document.getElementById("result").innerHTML = base + " ^ " + exponent + " = " + result;
//     }
// }