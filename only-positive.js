/* const myNumbers = [45, 55, 60, 65, -40, 70, 80];

function onlyPositive(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 0) {
            positive.push(element);
        }

    }
    return positive;
}

const ressult = onlyPositive(myNumbers);
console.log('Positive : ', ressult); */
////////////////////////////////////////////////////////////////
//way-1
const myNumbers = [45, 50, 55, 60, 65, -40, 70, 80, 90];

function onlyPositive(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            break;
        }
        else {
            positive.push(element);
        }
    }
    return positive;
}

const ressult = onlyPositive(myNumbers);
console.log('Positive : ', ressult);


//way-2
function printPositiveValues(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            console.log(array[i]);
        } else {
            break;
        }
    }
}

// Example usage
const myNumbers2 = [3, 7, -2, 9, 4, -5, 10];
printPositiveValues(myNumbers2);


