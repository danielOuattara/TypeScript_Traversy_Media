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
var id = 5;
// id = "5"; // X Incorrect
var company = "john";
var isPublished = true;
var age = 23;
//-------------------------------------
var ids = [1, 2, 3, 4];
// ids.push("hello") // Error
var anyArray = [1, true, "John"];
anyArray.push(4);
console.table(anyArray);
//-------------------------------------
// tuple
var person = [1, "jane", true];
// keep the order of item
//-------------------------------------
// tuple array
var employee = [];
employee = [
    [1, "John"],
    [2, "Jane"],
];
employee.push([3, "Tom"]);
//-------------------------------------
// union
var p_id;
p_id = "33";
p_id = 33;
//-------------------------------------
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // -> 0
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // -> 1
console.log(Direction2.Left); // -> 3
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up); // -> 1
console.log(Direction3.Left); // -> 3
//-------------------------------------
// object
var user = {
    id: 1,
    name: "Tom"
};
var user2 = {
    id: 2,
    name: "Jane"
};
// type assertion
var cid = 1;
// let customerId = <number> cid
var customerId = cid;
//-------------------------------------
// functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
function logMessage(message) {
    console.log(message);
}
console.log(logMessage("Hello"));
console.log(logMessage(4));
var user1 = {
    id: 2,
    name: "Daniel"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
//-------------------------------------
// classes
var Person = /** @class */ (function () {
    function Person(person_id, person_name) {
        this.id = person_id;
        this.name = person_name;
    }
    return Person;
}());
var daniel = new Person(1, "Daniel Ouattara");
var julie = new Person(2, "Julie Ouattara");
// daniel.id = 3; // Error
// daniel.name = "Gaïa Nihasah"; // Error
//----
var Person2 = /** @class */ (function () {
    function Person2(person_id, person_name) {
        this.id = person_id;
        this.name = person_name;
    }
    return Person2;
}());
var daniel2 = new Person2(1, "Daniel Ouattara");
var julie2 = new Person2(2, "Julie Ouattara");
// daniel2.id = 3; // Error
// daniel2.name = "Gaïa Nihasah"; // Error
var Person3 = /** @class */ (function () {
    function Person3(person_id, person_name) {
        this.id = person_id;
        this.name = person_name;
    }
    Person3.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person3;
}());
var daniel3 = new Person3(1, "Daniel Ouattara");
console.log(daniel3.register());
var Employee = /** @class */ (function () {
    function Employee(person_id, person_name) {
        this.id = person_id;
        this.name = person_name;
    }
    Employee.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Employee;
}());
var john = new Employee(0, "John Doe");
console.log(john.register());
//-------------------------------------
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, role_manager) {
        var _this = _super.call(this, id, name) || this;
        _this.role = role_manager;
        return _this;
    }
    Manager.prototype.hire = function () {
        return "".concat(this.name, " can hire employees");
    };
    return Manager;
}(Employee));
var brad = new Manager(77, "Brad Traversy", "dev admin");
console.log(brad.name);
console.log(brad.register());
console.log(brad.hire());
//-------------------------------------
// generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["brad", "john", "joe"]);
numArray.push("hello");
// ------------------------------
function getArray2(items) {
    return new Array().concat(items);
}
var numArray2 = getArray2([1, 2, 3, 4]);
var strArray2 = getArray2(["brad", "john", "joe"]);
// numArray2.push("hello"); // Error
// strArray2.push(3); // Error
