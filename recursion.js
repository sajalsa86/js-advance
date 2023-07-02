//simple for loop //++
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);

//simple for loop //--
let sum2 = 0;
for (let i = 5; i >= 1; i--) {
    sum2 = sum2 + i;
}
console.log(sum2);


//subject today recursion

function recursion(number) {
    if (number == 1) {
        return 1;
    }
    return number + recursion(number - 1);
}
const result = recursion(5);
console.log(result);

//simple fact
let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact = fact * i;

}
console.log(fact);

// fact recursion
function facttorial(i) {
    if (i == 1) { return 1 }
    return i * facttorial(i - 1);
}
const viewFacttorial = facttorial(5);
console.log(viewFacttorial);






