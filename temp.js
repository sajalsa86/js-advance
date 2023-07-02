let firstNumber = 10;
let secoundNumber = 20;

//swap way-1
// const temp = firstNumber;
// firstNumber = secoundNumber;
// secoundNumber = temp;
// console.log(firstNumber, secoundNumber);

//swap way-2
[firstNumber, secoundNumber] = [secoundNumber, firstNumber];
console.log(firstNumber, secoundNumber);