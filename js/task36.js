// function countNotes() {
    
//     let amount = parseFloat(document.getElementById("inputNumber").value.trim());
  
//     let resultElement = document.getElementById('result');
//     resultElement.innerHTML = '';
  
//     if (amount === "" || isNaN(amount) || amount < 0) {
//       resultElement.innerHTML = "Enter a valid positive number as Amount!";
//       return;
//     }

//     let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1]; // List of available note denominations
//     let counts = {};
  
//     for (let i = 0; i < notes.length; i++) {
//       let note = notes[i];
//       let count = Math.floor(amount / note);
//       amount -= count * note;
//       counts[note] = count;
//     }
  
//     for (let note in counts) {
//       if (counts.hasOwnProperty(note)) {
//         var count = counts[note];
//         if (count > 0) {
//           var noteString = count + ' x ' + note + ' notes';
//           resultElement.innerHTML += noteString + '<br>';
//         }
//       }
//     }
//   }