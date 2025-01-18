let input = []

function addInput(value) {
    input.push(value);
    alert(Input)
    document.getElementById("screen").value = input;//shows current number not properly working
  }

  function calculate() {
      let result = input//No eval I tried to do it with eval first then replace the eval but I could not
      alert(result)
      document.getElementById("screen").value = result;//shows answer works
      input = []; // Clear the input array after calculation
}//not finished