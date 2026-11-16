// 1. Create a function named welcome()

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome(); // output: Welcome to JavaScript

// 2. Create a function named student()

function student() {
    console.log("Name: Mohan");
    console.log("Age: 22");
    console.log("City: Coimbatore");
}

student();

/*
output:
Name: Mohan
Age: 22
City: Coimbatore
*/

// 3. Create a function named addition() 

function addition() {
    let a = 10;
    let b = 20;

    console.log(a + b);
}

addition(); // output: 30

// 4. Create a function named calculator()

function calculator() {
    let a = 20;
    let b = 10;

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
}

calculator();

/*
output:
Addition: 30
Subtraction: 10
*/

// 5. Create a function named company()

function company() {
    console.log("Welcome to Stackly");
}

company();

// 6. Create a function named multiplication()

function multiplication() {
    let a = 5;
    let b = 4;

    console.log(a * b);
}

multiplication(); // output: 20

// 7. Create a function named greeting() and call it three times

function greeting() {
    console.log("Good Morning!");
}

greeting();
greeting();
greeting();

/*
Good Morning!
Good Morning!
Good Morning!
*/

// 8. Function with two parameters

function addition(a, b) {
    console.log("Addition:", a + b);
}

addition(10, 20); // output: 30

// 9. Function with three parameters 
function student(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}

student("Mohan", 22, "Coimbatore");

/*
output: 
Mohan
22
Coimbatore
*/

// 10. Employee name and salary

function employee(name, salary) {
    console.log("Employee Name:", name);
    console.log("Salary:", salary);
}

employee("Mohan", 25000);

/*
output:
Employee Name: Mohan
Salary: 25000
*/

// 11. Three numbers multiplication

function multiplication(a, b, c) {
    console.log(a * b * c);
}

multiplication(2, 3, 4); // output: 24

// 12. Accept your name as an argument
function welcome(name) {
    console.log("Welcome to JavaScript " + name);
}

welcome("Mohan"); // output: Welcome to JavaScript Mohan

// 13. Three parameters but pass only two arguments
function student(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}

student("Mohan", 22);

/*
output:
Mohan
22
undefined
*/

// 14. Two parameters but pass three arguments
function addition(a, b) {
    console.log(a + b);
}

addition(10, 20, 30); // output: 30

// 15. Return addition of two numbers
function addition(a, b) {
    return a + b;
}

console.log(addition(10, 20)); // output: 30

// 16. Return subtraction

function subtraction(a, b) {
    return a - b;
}

console.log(subtraction(50, 20)); // output: 30

// 17. Return multiplication and store in a variable

function multiplication(a, b) {
    return a * b;
}

let result = multiplication(5, 4);

console.log(result); // output: 20

// 18. Return a person's age

function getAge() {
    return 22;
}

let age = getAge();

console.log("My Age:", age); // My Age: 22

// 19. Return division of two numbers
function division(a, b) {
    return a / b;
}

console.log(division(20, 5)); // output: 4

// 20. One function returns a value and another prints it
function addition(a, b) {
    return a + b;
}

function display() {
    let result = addition(10, 20);

    console.log(result);
}

display(); // output: 30

// 21. Create a var variable inside a block

{
    var a = 10;
}

console.log(a); // output: 10

// 22. Create a let variable inside a block
{
    let a = 10;
}

console.log(a); // output: ReferenceError: a is not defined

// 23. Create a const variable inside a block
{
    const a = 10;
}

console.log(a); // output: ReferenceError: a is not defined

// 24. Create a var variable inside a function
function student() {
    var name = "Mohan";
}

student();

console.log(name); // output: ReferenceError: name is not defined

// 25. Create a var variable and print before initialization
console.log(a);

var a = 10; // output: undefined

// 26. Access let and const before initialization
console.log(a);

let a = 10; // output: ReferenceError

console.log(b);

const b = 20; // output: referenceError

// 27. Named Function
function student(name) {
    console.log(name);
}

student("Mohan"); // output: Mohan

// 28. Anonymous Function

let student = function(name) {
    console.log(name);
};

student("Mohan"); // output: Mohan

// 29. Arrow Function

const addition = (a, b) => {
    console.log(a + b);
};

addition(10, 20); // output: 30

// 30. Create three different function types

// Named function – Subtraction
function subtraction(a, b) {
    console.log(a - b);
}

subtraction(50, 20); // output: 30

// Anonymous function – Multiplication
let multiplication = function(a, b) {
    console.log(a * b);
};

multiplication(5, 4); // output: 20

// Arrow function – Division
const division = (a, b) => {
    console.log(a / b);
};

division(20, 5); // output: 4