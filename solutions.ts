// Solution to Problem 1:
function filterEvenNumbers(Songkha: number[]): number[] {
    return Songkha.filter(num => num % 2 === 0)
}

// Solution to Problem 2:
function reverseString(Lekha: string): string {
    return Lekha.split("").reverse().join("");
}

// Solution to Problem 3:
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return '"String"';
    } else {
        return '"Number"';
    }
}

// Solution to Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Solution to Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// Solution to Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}

// Solution to Problem 7
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  return firstArray.filter(num => secondArray.includes(num));
}
