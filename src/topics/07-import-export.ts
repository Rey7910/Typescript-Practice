import {Product, taxCalculation, tax as tax1} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description:"Nokia",
        price: 200
    },
    {
        description: "Iphone",
        price: 2000
    }
];

// Tax = 0.15

const [total, tax] =taxCalculation({tax:tax1, products:shoppingCart});

console.log("Total: ",total);
console.log("Tax: ",tax)

export{};