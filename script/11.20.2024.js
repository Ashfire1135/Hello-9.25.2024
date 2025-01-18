function calculator() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  // Googled
  let selectElement = document.getElementById("symbol");
  let selectedValue = selectElement.value;

  let answer;

  switch (selectedValue) {
    case "+":
      answer = number1 + number2;
      break;
    case "-":
      answer = number1 - number2;
      break;
    case "x":
      answer = number1 * number2;
      break;
    case "÷":
      answer = number1 / number2;
      break;
  }

  alert(answer);
}
