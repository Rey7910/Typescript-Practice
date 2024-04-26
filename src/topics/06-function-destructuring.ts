interface Product{
    description: string,
    price: number,
};

const phone:Product={
    description:"Iphone 5",
    price: 99.99,
};

const nokia:Product={
    description:"Nokia x",
    price: 50.0,
};

interface TaxCalculationsOptions{
    tax: number,
    products: Product[],
}

function taxCalculation({tax,products}: TaxCalculationsOptions):[number,number]{
    let total = 0;

    //const {tax, products} = options;

    products.forEach( ({price})=>{
        total+=price;
    });

    return [total, total*tax];
}

const shoppingCart:Product[] = [phone, nokia];
const tax:number = 0.15;


const [priceTotal="Not found", taxTotal="Not found"] = taxCalculation({
    products: shoppingCart, 
    tax: tax,
});



console.log('Total: ',priceTotal);
console.log('Tax: ',taxTotal);

export {};