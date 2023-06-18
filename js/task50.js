function calculation() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let option = parseInt(document.getElementById("operation").value);
    let result;

    switch (option) {
      case 1:
        result = num1 + num2;
        break;
      case 2:
        result = num1 - num2;
        break;
      case 3:
        result = num1 * num2;
        break;
      case 4:
        result = num1 / num2;
        break;
      default:
        result = "Invalid Option";
        break;
    }

    document.getElementById("result").innerHTML = "Result: " + result;

    if (option !== 5) {
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("operation").value = "";
    }
  }