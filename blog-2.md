# How Generics Help Build Reusable and Strictly Typed Components

### Introduction
Generics ব্যবহার করলে function reusable হয় এবং return type automatically detect করতে পারে।

### Body

#### What are Generics?
একই function যদি কখনো number, কখনো string, আবার কখনো object নিয়ে কাজ করে, তাহলে বারবার আলাদা function লেখার দরকার হয় না। Generics ব্যবহার করলে একটি function দিয়েই সব handle করা যায় এবং ভুল type ব্যবহার করলে TypeScript warning দেখায়।

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement([1, 2, 3]); // type: number
const str = getFirstElement(["a", "b"]); // type: string
```
