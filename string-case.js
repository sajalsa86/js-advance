//21-1 String comparison using toLowerCase toUpperCase
//toLowerCase
const userName = 'Sajal Hossain';
const userInput = 'saJal hossain';

if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('Valid user');
}
else {
    console.log('Invalid User');
}

//toUpperCase

const herName = "Akashi Akther";
const sheName = "akashi akther";

if (herName.toUpperCase() === sheName.toUpperCase()) {
    console.log('Valid user');
} else {
    console.log('Invalid User');
}

// Locale Lower Case
const myName = "sajal Hossain suzan";
console.log(myName.toLocaleLowerCase());
// Locale upper Case
const myName2 = "sajal Hossain suzan";
console.log(myName2.toLocaleUpperCase());
