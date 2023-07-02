//1. radian to degree

function radianToDegree(radian) {
    const degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
}

const inputRadian = 1;
const veiwDegree = radianToDegree(inputRadian);
console.log(veiwDegree);

//2. check whether the given file name is a javaScript file or not


function isJavaScriptFile(fileName) {
    var extension = fileName.slice(fileName.lastIndexOf('.') + 1);
    return extension.toLowerCase() === 'js';
}

// Example usage:
var fileName1 = 'script.js';
var fileName2 = 'styles.css';

console.log(isJavaScriptFile(fileName1));  // Output: true
console.log(isJavaScriptFile(fileName2));  // Output: false

//calculator the total oil price

function oilPrice(diesel, petrol, octane) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const total = (diesel * dieselPrice) + (petrol * petrolPrice) + (octane * octanePrice);
    return total;
}
const diesel = 70;
const petrol = 1;
const octane = 2;

const grandTotalPrice = oilPrice(diesel, petrol, octane);
console.log('Total : ', grandTotalPrice);

//4.
function publicBusFare(people) {
    const stayOnbus = 50;
    const stayOnMicro = 11;
    const perPcsFare = 250;

    const withOutBus = people - stayOnbus;
    const withOutBusAndMicro = withOutBus - stayOnMicro;
    let publicFare = withOutBusAndMicro * perPcsFare;
    if (publicFare < 0) {
        publicFare = 0;
    }
    return publicFare;


}

const numberOfPeople = 62;
const totalPublicBusFare = publicBusFare(numberOfPeople);
console.log('Total Public Bus Fare: ', totalPublicBusFare);


//5.
const object1 = [
    { name: 'sajal', friend: 'akashi' }
];
const object2 = [
    { name: 'akashi', friend: 'sajal' }
];

function isBestFriend(firstObject, secondObject) {
    if (firstObject[0].name === secondObject[0].friend && firstObject[0].friend === secondObject[0].name) {
        return true;
    } else {
        return false;
    }

}

const viewBestFriend = isBestFriend(object1, object2);
console.log(viewBestFriend);

