let id: number = 5;
// id = "5"; // X Incorrect

let company: string = "john";
let isPublished: boolean = true;
let age: number = 23;

//-------------------------------------

let ids: number[] = [1, 2, 3, 4];
// ids.push("hello") // Error

let anyArray: any[] = [1, true, "John"];
anyArray.push(4);
console.table(anyArray);

//-------------------------------------
// tuple

let person: [number, string, boolean] = [1, "jane", true];
// keep the order of item

//-------------------------------------
// tuple array
let employee: [number, string][] = [];

employee = [
  [1, "John"],
  [2, "Jane"],
];

employee.push([3, "Tom"]);

//-------------------------------------
// union
let p_id: string | number;

p_id = "33";
p_id = 33;

//-------------------------------------
// Enum

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // -> 0

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction2.Up); // -> 1
console.log(Direction2.Left); // -> 3

enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction3.Up); // -> Up
console.log(Direction3.Left); // -> Left

//-------------------------------------
// object

const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Tom",
};

//-------------------------------------
// type

type UserType_0 = {
  id: number;
  name: string;
};

const user2: UserType_0 = {
  id: 2,
  name: "Jane",
};
//-------------------------------------
// interface

interface UserInterface_0 {
  id: number;
  name: string;
}

const user3: UserInterface_0 = {
  id: 2,
  name: "Jane",
};

//-------------------------------------
// type assertion
let cid: any = 1;
let customerId_0 = <number>cid;
let customerId_1 = cid as number;

//-------------------------------------
// functions

function addNumber(x: number, y: number): number {
  return x + y;
}

console.log(addNumber(1, 3));

function logMessage(message: string | number): void {
  console.log(message);
}

console.log(logMessage("Hello"));
console.log(logMessage(4));

//-------------------------------------
// interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 2,
  name: "Daniel",
};

// user1.id = 3 // Error: readonly

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//-------------------------------------
// classes

class Person {
  id: number;
  name: string;
  age?: number;

  constructor(person_id: number, person_name: string) {
    this.id = person_id;
    this.name = person_name;
  }
}

const daniel = new Person(1, "Daniel Ouattara");
const julie = new Person(2, "Julie Ouattara");

// daniel.id = 3; // Error
// daniel.name = "Gaïa Nihahsah"; // Error

//--------------------------
// Access modifiers

class Person2 {
  private id: number;
  protected name: string;
  age?: number;

  constructor(person_id: number, person_name: string, age?: number) {
    this.id = person_id;
    this.name = person_name;
    this.age = age;
  }
}

const daniel2 = new Person2(1, "Daniel Ouattara", 38);
const julie2 = new Person2(2, "Julie Ouattara");

// daniel2.id = 3; // Error
// daniel2.name = "Gaïa Nihasah"; // Error
daniel2.age = 39;

class Person3 {
  private id: number;
  protected name: string;
  age?: number;

  constructor(person_id: number, person_name: string, age?: number) {
    this.id = person_id;
    this.name = person_name;
    this.age = age;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const daniel3 = new Person3(1, "Daniel Ouattara");
console.log(daniel3.register());

const julie3 = new Person3(1, "Julie Ouattara", 37);
console.log(julie3.register());

//-------------------------------------
// classes & interface

interface EmployeeInterface {
  id: number;
  name: string;
  age?: number;
  register(): string;
}

class Employee implements EmployeeInterface {
  id: number;
  name: string;
  age?: number;

  constructor(person_id: number, person_name: string) {
    this.id = person_id;
    this.name = person_name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const john = new Employee(0, "John Doe");

console.log(john.register());

//-------------------------------------

class Manager extends Employee {
  role: string;

  constructor(id: number, name: string, role_manager: string) {
    super(id, name);
    this.role = role_manager;
  }

  hire() {
    return `${this.name} can hire employees`;
  }
}
const brad = new Manager(77, "Brad Traversy", "dev admin");
console.log(brad.name);
console.log(brad.register());
console.log(brad.hire());

//-------------------------------------
// generics

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "joe"]);

numArray.push("hello");

// ------------------------------

function getArray2<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray2 = getArray2<number>([1, 2, 3, 4]);
let strArray2 = getArray2<string>(["brad", "john", "joe"]);

// numArray2.push("hello"); // Error
// strArray2.push(3); // Error
