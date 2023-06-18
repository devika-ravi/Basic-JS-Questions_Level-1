function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('checkButton').click(); // Simulate button click
    }
}

function findEligibility(){
    let physicsMark = parseInt(document.getElementById("physicsMark").value.trim());
    let chemistryMark = parseInt(document.getElementById("chemistryMark").value.trim());
    let mathsMark = parseInt(document.getElementById("mathsMark").value.trim());

    let totalMarks = physicsMark + chemistryMark + mathsMark ;
    console.log (totalMarks);
    let physicsMathTotal = physicsMark + mathsMark ;
    console.log (physicsMathTotal);
    
    if (physicsMark === "" || isNaN(physicsMark) || chemistryMark === "" || isNaN(chemistryMark) || mathsMark === "" || isNaN(mathsMark) ) { 
      document.getElementById("result").innerHTML = "Invalid input. Please enter 3 valid numbers.";
      return;
    } else {
      if (physicsMark >= 55 && chemistryMark >= 50 && mathsMark >= 65 && totalMarks >= 190){
        document.getElementById("result").innerHTML = "The candidate is eligible for the admission :)";
      } else if (physicsMathTotal >= 140){
        document.getElementById("result").innerHTML = "The candidate is eligible for the admission :)";
      } else {
        document.getElementById("result").innerHTML = "The candidate is NOT eligible for the admission :(";
      }
    }
}