

function reversString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const index = i;
        const element = text[index];
        reversed = reversed + element;
        //console.log(element, reversed);
    }
    return reversed;
}
const myString = 'I Love You Akashi';
const viewRevers = reversString(myString);
console.log('Reversed output : ', viewRevers);

//words revers

function wordsRevers(str) {

    let words = str.split(' ');
    let myWords = [];
    //console.log(words);
    for (let i = words.length - 1; i >= 0; i--) {
        const index = i;
        const element = words[index];
        myWords.push(element);
        //console.log(element);
    }
    const reversedWords = myWords.join(' ');
    return reversedWords;
}

const mySentence = 'I Love You Akashi';
const result = wordsRevers(mySentence);
console.log('Reversed Words : ', result);