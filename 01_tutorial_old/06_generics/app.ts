// generics

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numbersArray = getArray([1, 2, 3, 4, 5]);
let stringsArray = getArray(["I ", "you ", "He", "She"]);

numbersArray.push(6); // correct
numbersArray.push("We"); // Accepted but incorrect

// ------------------------------

// how to handle the case where we want to output an array of string and an array of number ?

function getArrayGeneric<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numbersArrayGen = getArrayGeneric<number>([1, 2, 3, 4, 5]);
let stringsArrayGen = getArrayGeneric<string>(["I ", "you ", "He", "She"]);

numbersArrayGen.push(6); // correct
// numbersArrayGen.push("We"); // Incorrect

stringsArray.push("We"); // Correct
// stringsArrayGen.push(6); // Incorrect
