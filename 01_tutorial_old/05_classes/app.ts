class User {
  userName: string;
  userEmail: string;
  userAge: number;

  constructor(name: string, email: string, age: number) {
    this.userName = name;
    this.userEmail = email;
    this.userAge = age;
    console.log(" User Class Constructor Executed !");
  }

  greeting() {
    return `${this.userName} ${this.userAge} y.o`;
  }
}

let daniel = new User("Ouattara", "mail@mail.com", 37);

console.log("daniel = ", daniel);
console.log(daniel.userAge);
console.log(daniel.greeting());

// --------------------------------------------------------------

class Employee {
  username: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.username = name;
    this.email = email;
    this.age = age;
  }

  greeting() {
    return `${this.username} ${this.age} y.o`;
  }
}

let john = new Employee("John Doe", "johnDoe@mail.com", 37);

console.log(john.age);
console.log(john.greeting());

// ----------------------------------------------------------------

class Employee2 {
  public username: string;
  private email: string;
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.username = name;
    this.email = email;
    this.age = age;
  }

  greeting() {
    return `${this.username} ${this.age} y.o`;
  }
}

let jana = new Employee2(" Jana Doe", "janaDoe@mail.com", 27);

//console.log(jana.age);
console.log(jana.greeting());

// --------------------------------------------

// Inheritance

class Manager extends Employee {
  office: string;
  salary: number;

  constructor(
    userName: string,
    userEmail: string,
    userAge: number,
    office: string,
    salary: number,
  ) {
    super(userName, userEmail, userAge);
    this.office = office;
    this.salary = salary;
  }

  hired(employeeName: string) {
    return `${this.username} hired ${employeeName}`;
  }
}

let steeve = new Manager("Steve Jobs", "steeve@mail.com", 54, "L.A", 30000);

console.log(steeve.hired("Daniel"));

// ----------------------------------------------------------------

// interface for class

interface Manager2Interface {
  country: string;
  salary: number;
  hired(value: string): string;
}

class Manager2 extends Employee implements Manager2Interface {
  country: string;
  office: string;
  salary: number;
  constructor(
    userName: string,
    userEmail: string,
    userAge: number,
    office: string,
    country: string,
    salary: number,
  ) {
    super(userName, userEmail, userAge);
    this.office = office;
    this.salary = salary;
    this.country = country;
  }

  hired(employeeName: string) {
    return `${this.username} hired ${employeeName}`;
  }
}

let steeve2 = new Manager("Steve Jobs", "steeve@mail.com", 54, "L.A", 30000);

console.log(steeve2.hired("Daniel"));
