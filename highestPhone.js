let phones1 = [
    { name: 'RealMe', camera: 16, storage: '64Gb', price: 25000, color: 'blue' },
    { name: 'ReadMe', camera: 20, storage: '128Gb', price: 35000, color: 'black' },
    { name: 'Sumsung', camera: 12, storage: '32Gb', price: 22000, color: 'silver' },
    { name: 'iPhone', camera: 48, storage: '512Gb', price: 90000, color: 'green' },
    { name: 'Oppo', camera: 16, storage: '16Gb', price: 14000, color: 'red' },
    { name: 'Nokia', camera: 20, storage: '64Gb', price: 17000, color: 'blue' },

];

function highestPhone(phones) {
    let highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price > highest.price) {
            highest = phone;
        }
    }
    return highest;
}

const highestPrice = highestPhone(phones1);
console.log('Highest Phone is : ', highestPrice);