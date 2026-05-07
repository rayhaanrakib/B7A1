# `any` is a Type Safety Hole and `unknown` is the Safer Choice


### Introduction
TypeScript provides two types to handle unknown values: `any` and `unknown`.

### Body

#### What is `any`?
any হলো যা TypeScript এর যেকোনো variable এর টাইপ ignore করে । এর ফলে কোড করার সময় কোন warning বা error পরে না। কিন্তু এটি স্থায়ী সমাধান না।

```typescript
let value: any = "hello";
value.toUpperCase(); // no issues
value.toFixed(2);    // no issues (but value is a string!)
value.nonExistentMethod(); // no issues (no error compile এর সময়)
```

#### What is `unknown`?
unknown type আরও safe কারণ TypeScript এটি ব্যবহার করার আগে type চেক করতে বাধ্য করে। type জেনে না নেওয়া পর্যন্ত unknown value এর উপর কোনো operation করা যায় না।

```typescript
let value: unknown = "hello";
// value.toUpperCase(); // Error shows: Object is of type 'unknown'

if (typeof value === "string") {
  value.toUpperCase();
}
```