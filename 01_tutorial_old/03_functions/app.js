"use strict";
exports.__esModule = true;
function getSum(number1, number2) {
    return number1 + number2;
}
console.log(getSum(1, 40));
console.log(getSum(1, "40")); // Bad
console.log(getSum("1", 40)); // Bad
//----------------------------------------------
function getSum2(number1, number2) {
    return number1 + number2;
}
console.log(getSum2(1, 4));
console.log(getSum2("1", 40));
//----------------------------------------------
// Bad
function getSum3(number1, number2) {
    return number1 + number2;
}
console.log(getSum3(1, "42"));
//-----------------------------------------------
// Bad
var getSum4 = function (number1, number2) {
    return number1 + number2;
};
console.log(getSum4(1, "8"));
//-----------------------------------------------
function getName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(getName("John", "Doe"));
//-----------------------------------------------
function getName2(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(getName2("John", "Doe"));
console.log(getName2("John", undefined));
console.log(getName2("John", null));
//-----------------------------------------------
function getName3(firstName, lastName) {
    if (lastName == undefined || lastName == null) {
        return "".concat(firstName);
    }
    return "".concat(firstName, " ").concat(lastName);
}
console.log(getName3("John"));
//-------------------------------------------------
function myVoid() { }
myVoid();
