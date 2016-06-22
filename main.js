function add(){
  var inputNumbers = checkNums();
  if (inputNumbers.valid === true){
    document.querySelector(".out").value = Number(inputNumbers.first) + Number(inputNumbers.second);
  }
}
function subtract(){
  var inputNumbers = checkNums();
  if (inputNumbers.valid === true){
    document.querySelector(".out").value = Number(inputNumbers.first) - Number(inputNumbers.second);
  }
}
function multiply(){
  var inputNumbers = checkNums();
  if (inputNumbers.valid === true){
    document.querySelector(".out").value = Number(inputNumbers.first) * Number(inputNumbers.second);
  }
}
function divide(){
  var inputNumbers = checkNums();
  if (inputNumbers.valid === true){
    document.querySelector(".out").value = Number(inputNumbers.first) / Number(inputNumbers.second);
  }
}
function checkNums(){
  var firstNum = document.querySelector(".number1").value;
  var secondNum = document.querySelector(".number2").value;
  var inputNumbers= {valid: true, first: firstNum, second: secondNum};
  if (!isNaN(firstNum) && !isNaN(secondNum)){
    return inputNumbers;
  } else {
    inputNumbers.valid = false;
    document.querySelector(".out").value = "Enter valid numbers";
    return inputNumbers;
  }
}
document.querySelector(".add").addEventListener("click", add);
document.querySelector(".sub").addEventListener("click", subtract);
document.querySelector(".mul").addEventListener("click", multiply);
document.querySelector(".dvd").addEventListener("click", divide);
