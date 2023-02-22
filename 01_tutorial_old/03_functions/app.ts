export {};

function getSum(number1, number2) {
  return number1 + number2;
}
console.log(getSum(1, 40));
console.log(getSum(1, "40")); // Bad
console.log(getSum("1", 40)); // Bad

//----------------------------------------------

function getSum2(number1: number, number2: number) {
  return number1 + number2;
}

console.log(getSum2(1, 4));
console.log(getSum2("1", 40));
//----------------------------------------------

// Bad
function getSum3(number1: any, number2: any) {
  return number1 + number2;
}

console.log(getSum3(1, "42"));

//-----------------------------------------------

// Bad
const getSum4 = (number1: any, number2: any) => {
  return number1 + number2;
};

console.log(getSum4(1, "8"));

//-----------------------------------------------

function getName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log(getName("John", "Doe"));

//-----------------------------------------------

function getName2(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

console.log(getName2("John", "Doe"));
console.log(getName2("John", undefined));
console.log(getName2("John", null));

//-----------------------------------------------

function getName3(firstName: string, lastName?: string): string {
  if (lastName == undefined || lastName == null) {
    return `${firstName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(getName3("John"));

//-------------------------------------------------

function myVoid(): void {}

myVoid();
