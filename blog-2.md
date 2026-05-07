# How Generics Help Build Reusable and Strictly Typed Components

### Introduction
Generics হলো TypeScript এর একটি feature যা reusable code লিখতে সাহায্য করে যা একই সাথে type safety maintain করে।

### Body

#### What are Generics?
Generics হলো একটি way যেখানে একটি function বা class যা different types এর সাথে কাজ করতে পারে।

```typescript
// Without Generics - type unsafe
function getFirstElement(arr: any[]) {
  return arr[0];
}

const num = getFirstElement([1, 2, 3]); // type: any
const str = getFirstElement(["a", "b"]); // type: any

// With Generics - type safe
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement([1, 2, 3]); // type: number
const str = getFirstElement(["a", "b"]); // type: string
```