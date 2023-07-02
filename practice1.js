//1. Feet to Inches conversion
function feetToInch(feet) {
    const getInch = feet * 12;
    return getInch;
}
const inputFeet = 2;
const totalInch = feetToInch(inputFeet);
console.log(inputFeet + ' Feet' + ' = ' + totalInch + ' Inch');

//2.  Centimeter to meter conversion
function centimeterToMeter(centimeter) {
    const getMeter = centimeter * 0.01;
    return getMeter;
}
const inputCentimeter = 100;
const totalMeter = centimeterToMeter(inputCentimeter);
console.log(inputCentimeter + ' Centimeter' + ' = ' + totalMeter + ' Meter');

//3. count total paper of three books

function paperRequirements(book1, book2, book3) {
    const smallBook = 100;
    const mediumBook = 200;
    const largeBook = 300;
    const paperRequir = (smallBook * book1) + (mediumBook * book2) + (largeBook * book3);
    return paperRequir;

}

const book100Page = 1;
const book200Page = 1;
const book300Page = 1;

const grandTotalPage = paperRequirements(book100Page, book200Page, book300Page);
console.log('Grang Total Page : ', grandTotalPage + ' Pcs');

// 4. best firend form an array
function bestFriend(friends) {
    let best = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length > best.length) {
            best = friend;
        }
    }
    return best;
}

const myFriends = ['Sajal', 'Samiha Hatun Boosra', 'suchi khatun', 'shihab ali'];
const getBestFriend = bestFriend(myFriends);
console.log('Best friend is : ', getBestFriend);

//5.
const name1 = [{ nameOne: 'realme', friendOne: 'apple' }];
const name2 = [{ nameTwo: 'apple', friendTwo: 'realme' }];

if (name1[0].nameOne === name2[0].friendTwo && name1[0].friendOne === name2[0].nameTwo) {
    console.log('Both are same');
}
else {
    console.log('Both are not same');
}

//6.
const object1 = { name: 'sajal', friend: 'akashi' };

const object2 = { name: 'akashi', friend: 'sajal' };


function isBestFriend(firstObject, secondObject) {
    if (firstObject.name === secondObject.friend && firstObject.friend === secondObject.name) {
        return true;
    } else {
        return false;
    }

}

const viewBestFriend = isBestFriend(object1, object2);
console.log(viewBestFriend);

