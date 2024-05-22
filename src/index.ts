console.log('hello world');
console.log('change3');

const products = [
    {
        title: 'iPhone',
        price: '1000',
    },
    {
        title: 'iPad',
        price: '1099',
    },
];

const addPrices = (price1: number, price2: number) => {
    return price1 + price2;
};

console.log(addPrices(+products[0].price, +products[1].price));