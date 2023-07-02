const friends = {
    name: 'Akashi Hatun', age: 20, village: 'dighirpar',
    isTrue: true,
    myNumber: [10, 20, 30, 40, 50],
    yourNumber: 350,
    isBest: function () {
        console.log('You Are my Best friend');
    },
    collage: 'malson',
    myString: ['abul', 'kabul', 'sabul', 'dabul'],
    objectArray: [{ movieName: 'akash', year: 2015 }, { movieName: 'batas', year: 2020 }],
    myObject: {
        act: 'sajal hossain', age: 28,
        products: {
            phone: 'realme',
            price: 15000,
            storage: '32gb',
            model: {
                model1: '3pro',
                model2: '2pro',
            },
        }
    }
};
console.log(friends.isBest);
friends.isBest();

