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

const addPrices = (price1: number, price2: number): number => {
    return price1 + price2;
};

console.log(addPrices(+products[0].price, +products[1].price));

//union type, multiple possibilites 
let val: number | string;

val = 10;

const strLength = (str1: string, str2: string): boolean => {
    return (str1 + str2).length > 10;
}

//object types, ? makes it so property can be undefined, or else missing property would throw an error
const course: {
    name: string;
    currentLesson: string;
    learningBasicTypes?: boolean;
    typesLearned?: string[];
    //this is a tuple definition by placing types inside array brackets, ordering matters
    courseInfo: [number, string];
} = {
    name: 'Switching to Typescript',
    currentLesson: 'Using Types',
    courseInfo: [9, 'advanced']
};

course.learningBasicTypes = true;
course.typesLearned = ['number', 'object', 'boolean', 'string', 'array']

//by specifying string in the typesLearned array, TS will apply the string prototype and auto-complete string methods when referencing elements in the array

course.typesLearned[0].toUpperCase();

enum FileExtension {
    JAVASCRIPT = '.js',
    TYPESCRIPT = '.ts',
    RUST = '.rs',
    PYTHON = '.py',
}

const value = FileExtension.JAVASCRIPT;

console.log(value);

const createFileName = (name: string, extension: FileExtension) => {
    return name + extension;
}

const fileName = createFileName('index', FileExtension.TYPESCRIPT);

console.log(fileName)

//types store custom variable types

type MyUnionType = string | number | boolean;

const convertToString = (value: MyUnionType) => {
    return `${value}`;
}

let myValue : MyUnionType;

myValue = 55;

console.log(convertToString(myValue));
myValue = true;

console.log(convertToString(myValue));

//function types

//declare paramaters and return value in TS
type AddFunction = (numbers: number[], toString?: boolean, printResult?: boolean, printMessage?: string) => number | string | void;

//apply function type params and return val to specific function, logic inside function is applied here
const addAll: AddFunction = (nums, toString, printResult, printMessage) => {
    const res = nums.reduce((prev, cur) => prev + cur, 0);
    if(!printResult) return toString ? res.toString() : res;

    console.log(printMessage || 'Result:', toString ? res.toString() : res);
}


import axios from 'axios';
import { SortOrder } from './types';

import type { ResponseData, Product, UserInput, ModifiedProduct } from './types';

const fetchData = async (): Promise<ResponseData> => {
    const { data } = await axios('https://dummyjson.com/products?limit=10');

    return data as ResponseData;
}

const sortData = (products: Product[], order: SortOrder) => {
    switch (order) {
        case SortOrder.ASC:
            return [...products].sort((a, b) => a.price - b.price);
        case SortOrder.DESC:
            return [...products].sort((a, b) => b.price - a.price);
        default:
            return products;
    }
}

const scrape = async (input: UserInput): Promise<Product[] | ModifiedProduct[]> => {

    const data = await fetchData();

    const sorted = sortData(data.products, input.sort as SortOrder);

    if (input.removeImages){
        return sorted.map((item) => {
            const { images, ...rest} = item;

            return rest;
        });
    }

    return sorted;
}

const main = async () => {
    const INPUT: UserInput<true> = { sort: 'ascending', removeImages: true};

    const result = await scrape(INPUT);

    console.log(result);
}

main();