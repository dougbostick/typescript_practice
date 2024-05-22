"use strict";
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
const addPrices = (price1, price2) => {
    return price1 + price2;
};
console.log(addPrices(+products[0].price, +products[1].price));
let val;
val = 10;
const strLength = (str1, str2) => {
    return (str1 + str2).length > 10;
};
const course = {
    name: 'Switching to Typescript',
    currentLesson: 'Using Types',
    courseInfo: [9, 'advanced']
};
course.learningBasicTypes = true;
course.typesLearned = ['number', 'object', 'boolean', 'string', 'array'];
course.typesLearned[0].toUpperCase();
