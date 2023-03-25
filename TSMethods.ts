function Demo(user){
    return "I am" + user;
}
let fname="Dhinesh";
console.log(demo(fname));



let id: number = 5;
let value: string = 'Number Type';
let isValueGiven: boolean = true;
let x:any;

let ids: number[] = [1,2,3,4,5,6]
let x1: any[] = [1,'b', true]

//Tuple
let employee: [number, string, boolean] = [1, "Dhinesh", true]
//Tuple array
let employees: [number, string, boolean][] = [
    [1, 'Dhinesh', true],
    [2,'Software', false],
    [3, 'Developer', true],
]

//union
let eid: string | number;

eid = 5
eid = 'Value'

//enum
enum Direction1 {
    up = 5,
    down,
    left,
    right
}

enum Direction2 {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

// console.log(direction2.left)

//object

type userType = {
    id: number,
    name: string
}

let User: userType = {
    id: 1,
    name: 'Dhinesh'
}

//type assert
let x3: any = 5
// let compId = x3 as number;
let compId = <number>x3;

//function

function doSum(a: number,b: number): number {
    return a+b
}

function logMe(x: string | number): void {
    if(typeof x === 'number') console.log('Hi Number')
    if(typeof x === 'string') console.log('Hi String')
}

// doSum('5')

//interface

type eid1 = number | string

interface userType1 {
    id: number,
    name: string,
    age?: number
}

let User1: userType1 = {
    id: 1,
    name: "Dhinesh"
}

// User1.id = 5

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x+y
const sub: MathFunc = (x: number, y: number) => x-y

interface PersonType {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonType {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is registered now`
    }
}

const iyy = new Person(1, 'Dhinesh')
const iyy1 = new Person(2, 'Software')
const iyy2 = new Person(3, 'Developer')

// console.log(iyy.register())

// child class

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(5, 'Rajesh', 'Developer')

console.log(emp1.register())

//Generics
function getArrays<T>(items: T[]):T[] {
    return new Array().concat(items);
}

let numArray = getArray<num>([1,2,3,4,5])
let strArray = getArray<str>(['a', 'b'])

numArray.push(1)
strArray.push('new')