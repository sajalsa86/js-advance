//22-7 Calculate the total cost of the products in a shopping cart

const shopingCurt = [
    { name: 'Shirt', price: 2200, pcs: 3 },
    { name: 'Pant', price: 1200, pcs: 2 },
    { name: 'Shoes', price: 1600, pcs: 5 },
    { name: 'Tie', price: 300, pcs: 5 },
    { name: 'Belt', price: 250, pcs: 3 }
];

const totalCost = (products) => {
    let sum = 0;
    for (let i = 0; i < shopingCurt.length; i++) {
        const product = products[i];
        const totalProduct = product.price * product.pcs;
        sum = sum + totalProduct;
    }
    return sum;
}

const expense = totalCost(shopingCurt);
console.log('Total Cost is : ', expense);