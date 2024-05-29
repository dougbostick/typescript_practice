"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var FileExtension;
(function (FileExtension) {
    FileExtension["JAVASCRIPT"] = ".js";
    FileExtension["TYPESCRIPT"] = ".ts";
    FileExtension["RUST"] = ".rs";
    FileExtension["PYTHON"] = ".py";
})(FileExtension || (FileExtension = {}));
const value = FileExtension.JAVASCRIPT;
console.log(value);
const createFileName = (name, extension) => {
    return name + extension;
};
const fileName = createFileName('index', FileExtension.TYPESCRIPT);
console.log(fileName);
const convertToString = (value) => {
    return `${value}`;
};
let myValue;
myValue = 55;
console.log(convertToString(myValue));
myValue = true;
console.log(convertToString(myValue));
const addAll = (nums, toString, printResult, printMessage) => {
    const res = nums.reduce((prev, cur) => prev + cur, 0);
    if (!printResult)
        return toString ? res.toString() : res;
    console.log(printMessage || 'Result:', toString ? res.toString() : res);
};
const axios_1 = require("axios");
const types_1 = require("./types");
const fetchData = async () => {
    const { data } = await (0, axios_1.default)('https://dummyjson.com/products?limit=10');
    return data;
};
const sortData = (products, order) => {
    switch (order) {
        case types_1.SortOrder.ASC:
            return [...products].sort((a, b) => a.price - b.price);
        case types_1.SortOrder.DESC:
            return [...products].sort((a, b) => b.price - a.price);
        default:
            return products;
    }
};
const scrape = async (input) => {
    const data = await fetchData();
    const sorted = sortData(data.products, input.sort);
    if (input.removeImages) {
        return sorted.map((item) => {
            const { images, ...rest } = item;
            return rest;
        });
    }
    return sorted;
};
const main = async () => {
    const INPUT = { sort: 'ascending', removeImages: true };
    const result = await scrape(INPUT);
    console.log(result);
};
main();
