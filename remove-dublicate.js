
//22-3 Remove duplicate items from an array

function removeDublicate1(names) {
    let name = [];
    for (let i = 0; i < names.length; i++) {
        const index = i;
        const element = names[index];
        //console.log(element);
        if (name.includes(element) === false) {
            name.push(element);
        }
    }
    return name;
}

const people = ['Sajal', 'Akashi', 'Samiha', 'Sajal', 'Suchi', 'Akashi'];
const uniqueNames = removeDublicate1(people);
console.log(uniqueNames);