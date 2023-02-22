var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.userName = name;
        this.userEmail = email;
        this.userAge = age;
        console.log(" User Class Constructor Executed !");
    }
    User.prototype.greeting = function () {
        return "".concat(this.userName, " ").concat(this.userAge, " y.o");
    };
    return User;
}());
var daniel = new User("Ouattara", "mail@mail.com", 37);
console.log("daniel = ", daniel);
console.log(daniel.userAge);
console.log(daniel.greeting());
// --------------------------------------------------------------
var Employee = /** @class */ (function () {
    function Employee(name, email, age) {
        this.username = name;
        this.email = email;
        this.age = age;
    }
    Employee.prototype.greeting = function () {
        return "".concat(this.username, " ").concat(this.age, " y.o");
    };
    return Employee;
}());
var john = new Employee("John Doe", "johnDoe@mail.com", 37);
console.log(john.age);
console.log(john.greeting());
// ----------------------------------------------------------------
var Employee2 = /** @class */ (function () {
    function Employee2(name, email, age) {
        this.username = name;
        this.email = email;
        this.age = age;
    }
    Employee2.prototype.greeting = function () {
        return "".concat(this.username, " ").concat(this.age, " y.o");
    };
    return Employee2;
}());
var jana = new Employee2(" Jana Doe", "janaDoe@mail.com", 27);
//console.log(jana.age);
console.log(jana.greeting());
// --------------------------------------------
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(userName, userEmail, userAge, office, salary) {
        var _this = _super.call(this, userName, userEmail, userAge) || this;
        _this.office = office;
        _this.salary = salary;
        return _this;
    }
    Manager.prototype.hired = function (employeeName) {
        return "".concat(this.username, " hired ").concat(employeeName);
    };
    return Manager;
}(Employee));
var steeve = new Manager("Steve Jobs", "steeve@mail.com", 54, "L.A", 30000);
console.log(steeve.hired("Daniel"));
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(userName, userEmail, userAge, office, salary) {
        var _this = _super.call(this, userName, userEmail, userAge) || this;
        _this.office = office;
        _this.salary = salary;
        return _this;
    }
    Manager2.prototype.hired = function () {
        return "".concat(this.username, " hired ").concat("ME");
    };
    return Manager2;
}(Employee));
var steeve2 = new Manager("Steve Jobs", "steeve@mail.com", 54, "L.A", 30000);
console.log(steeve2.hired("Daniel"));
