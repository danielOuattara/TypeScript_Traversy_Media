export {};

console.log("-------------");
console.log("Hello World !");

//--------------------------------
let myString: string;
myString = "Hello World Again!";
console.log(myString);

//--------------------------------
let myNumber: number;
myNumber = 22;
console.log(myNumber);

//--------------------------------
let myBoolean: boolean;
myBoolean = true;
console.log(myBoolean);

//--------------------------------
let myAny: any;
myAny = true;
console.log(myAny);
myAny = "home";
console.log(myAny);

//--------------------------------
let myArrayOfString: string[] = []; // declaration + initialization

myArrayOfString = ["Daniel", "Julie"];
console.log(myArrayOfString);

//--------------------------------
let myArrayOfNumber: number[] = []; // declaration + initialization
myArrayOfNumber.push(...[2, 3, 5, -12]);
console.log("myArrayOfNumber = ", myArrayOfNumber);

//--------------------------------
let myArrayOfBooleans: boolean[]; // declaration

myArrayOfBooleans = [true, true, false];
console.log(myArrayOfNumber);

//--------------------------------
let myArrayOfString2: Array<string>; // declaration + initialization

myArrayOfString = ["Daniel", "Julie"];
console.log(myArrayOfString);

//--------------------------------
let myArrayOfNumber2: Array<number>; // declaration + initialization

myArrayOfNumber2 = [2, 3, 5, -12];
console.log(myArrayOfNumber2);

//--------------------------------
let myArrayOfBooleans2: Array<boolean>; // declaration

myArrayOfBooleans = [true, true, false];
console.log(myArrayOfNumber);

//--------------------------------

let myTupleOfNumbers: [string, number]; // tuple

myTupleOfNumbers = ["Hello", 4];
console.log(myTupleOfNumbers);

let myVoid: void;
console.log("myVoid =", myVoid);

let myVoid2: void = undefined;
console.log("myVoid2 = ", myVoid2);

let myNull: null = null;
console.log("myNull =", myNull);

let myUndefined: undefined = undefined;
console.log("myUndefined = ", myUndefined);
