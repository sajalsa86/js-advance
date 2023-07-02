//22-9 Handle unexpected function input parameter error

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return ' Please Enter a number';
    }
    return 45 + 15;
}
const result = add("45", 15);
console.log(result);