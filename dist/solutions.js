"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Solution to Problem 1:
function filterEvenNumbers(Songkha) {
    return Songkha.filter(num => num % 2 === 0);
}
// Solution to Problem 2:
function reverseString(Lekha) {
    return Lekha.split("").reverse().join("");
}
function checkType(value) {
    if (typeof value === "string") {
        return '"String"';
    }
    else {
        return '"Number"';
    }
}
// Solution to Problem 4
function getProperty(obj, key) {
    return obj[key];
}
function toggleReadStatus(book) {
    return { ...book, isRead: true };
}
// Solution to Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
    }
}
// Solution to Problem 7
function getIntersection(firstArray, secondArray) {
    return firstArray.filter(num => secondArray.includes(num));
}
//# sourceMappingURL=solutions.js.map