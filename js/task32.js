  function checkPalindrome() {
    let number = parseInt(document.getElementById('inputNumber').value.trim());
    let result = document.getElementById('result');

    let numberToString = number.toString();
    let reversedString = numberToString.split('').reverse().join('');

    if (numberToString === reversedString) {
      result.textContent = number + ' is a palindrome number.';
    } else {
      result.textContent = number + ' is not a palindrome number.';
    }
  }