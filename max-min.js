function whoGetCake(sajal, akashi, chumki) {
    if (sajal > akashi && sajal > chumki) {
        return ('Sajal Get the cake in this bela');
    }
    else if (akashi > sajal && akashi > chumki) {
        return ('Akashi Get the cake in this bela');
    }
    else {
        return ('Chumki Get the cake in this bela');
    }
}
const sajal1 = 90;
const akashi1 = 110;
const chumki1 = 100;
const result = whoGetCake(sajal1, akashi1, chumki1);
console.log(result);

function getMax(num1, num2, num3) {
    let maxNumber = Math.max(num1, num2, num3);
    return maxNumber;
}

const getMaxResult = getMax(45, 75, 60);
console.log('Max Number : ' + getMaxResult);

//min
function getMin(num1, num2, num3) {
    let minNumber = Math.min(num1, num2, num3);
    return minNumber;
}

const getMinResult = getMin(45, 75, 60);
console.log('Min Number : ' + getMinResult);

//get largest form an array

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        //console.log(element);
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}

const NumberItems = [167, 190, 120, 5, 165, 500, 137];
const Getlargest = maxInArray(NumberItems);
console.log('Largest item Is : ' + Getlargest);


//get lowest0 form an array

function getLowest(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const items = [167, 190, 120, 5, 165, 500, 137];
const ViewLowest = getLowest(items);
console.log('Lowest item Is : ' + ViewLowest);