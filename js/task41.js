function calculateElectricityBill() {
            
    let units = parseFloat(document.getElementById("inputUnits").value.trim());
   
  
    if (units === "" || isNaN(units) || units < 0) {
      document.getElementById("result").innerHTML = "Enter a valid positive number!";
      alert ("Invalid input!")
      return;
    }
  
    let totalBillAmount;
  
    if (units <= 50) {
      totalBillAmount = units * 2.60;
  } else if (units<50 && units <= 100){
      totalBillAmount = (50 * 2.60) + ((units - 50) * 3.25);
  } else if (units<100 && units <= 200) {
      totalBillAmount = ((50 * 2.60) + (50 * 3.25)) + ((units - 100) * 5.65);
  } else {
      totalBillAmount = ((50 * 2.60) + (50 * 3.25) + (100 * 5.65)) + ((units - 200) * 7.25);
  }
  
   if (units > 700) {
      totalBillAmount += totalBillAmount * 0.005;
  }
  
  document.getElementById("result").innerHTML = "Electricity bill for " + units + " units of: ₹" + totalBillAmount;
  
  }