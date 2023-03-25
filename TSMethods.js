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
function demo(user) {
    return "I am" + user;
}
var fname = "Dhinesh";
console.log(demo(fname));
var id = 5;
var value = 'Number Type';
var isValueGiven = true;
var x;
var ids = [1, 2, 3, 4, 5, 6];
var x1 = [1, 'b', true];
//Tuple
var employee = [1, 'Dhinesh', true];
//Tuple array
var employees = [
    [1, 'Dhinesh', true],
    [2, 'Software', false],
    [3, 'Developer', true],
];
//union
var eid;
eid = 5;
eid = 'Value';
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 5] = "up";
    direction1[direction1["down"] = 6] = "down";
    direction1[direction1["left"] = 7] = "left";
    direction1[direction1["right"] = 8] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
var User = {
    id: 1,
    name: 'Dhinesh'
};
//type assert
var x3 = 5;
// let compId = x3 as number;
var compId = x3;
//function
function doMath(a, b) {
    return a + b;
}
function logme(x) {
    if (typeof x === 'number')
        console.log('Hi Number');
    if (typeof x === 'string')
        console.log('Hi String');
}
var User1 = {
    id: 1,
    name: 'Dhinesh'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is registered now");
    };
    return Person;
}());
var iyy = new Person(1, 'Dhinesh');
var iyy1 = new Person(2, 'Software');
var iyy2 = new Person(3, 'Developer');
// console.log(iyy.register())
// child class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp1 = new Employee(5, 'Rajesh', 'Developer');
console.log(emp1.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4, 5]);
var strArray = getArray(['a', 'b']);
numArray.push(1);
strArray.push('sdff');
