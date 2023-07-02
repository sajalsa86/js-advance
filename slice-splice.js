
//Slice
// copy hobe
const numbers = [22, 35, 65, 83, 46, 88, 95, 100,];
const partial = numbers.slice(2, 5);
console.log(partial);
console.log(numbers);


//Splice
//cut hobe
const ages = [23, 33, 63, 83, 43, 83, 93];
const partial2 = ages.splice(2, 3, 100, 200);// third value theke add hohe
console.log(partial2);
console.log(ages);

