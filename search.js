//21-2 Apply Search includes, indexOf, startswith, endswith
//way-1
const songs = "Tumi Bondhu kala pakhi ami jeno ki";
const doesExist = songs.includes('pakhi');
console.log(doesExist);

//way-2
const searchString = 'Tumi';
const doesExist2 = songs.includes(searchString);
console.log(doesExist2);

//way-3
const searchFriend = "bondhu";
const songsLowerCase = songs.toLowerCase();
const doesExist3 = songsLowerCase.includes(searchFriend);
console.log(doesExist3);

//shorthand

const doesExist4 = songs.toLowerCase().includes(searchFriend);
console.log(doesExist4);


const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "dog" is 52"