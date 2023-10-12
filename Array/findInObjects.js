const products = [
    { name: 'Chocolate', price: 2000 },
    { name: 'ToothBrush', price: 500 },
    { name: 'Toothpaste', price: 900 }
];

const expensiveProduct = products.find(product => product.price > 1000);

if (expensiveProduct) {
    console.log(`${expensiveProduct.name} is the expensive one among the others. It costs you ${expensiveProduct.price} Rwf.`);
} else {
    console.log("There are no products that cost more than 1000.");
}
