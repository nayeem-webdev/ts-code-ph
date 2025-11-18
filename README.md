# Problem Solving with TypeScript

This assignment is designed to assess your understanding of fundamental TypeScript concepts. It includes a series of problems that cover topics such as types, functions, classes, interfaces, and array manipulation.

## Problem 6:

Define an interface `Book` with the following properties:

- `title` (string)
- `author` (string)
- `publishedYear` (number)
- `isAvailable` (boolean)

Then, create a function `printBookDetails` that accepts an object of type `Book` and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

### Requirements:

- You must define the `Book` interface correctly.
- The `printBookDetails` function must accept an object that follows to the `Book` interface.

### Sample Input:

```ts
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
```

### Sample Output:

```
Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes
```

## Problem 7:

Create a function **getUniqueValues** that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- The function should handle arrays of strings or numbers.
- You are not allowed to use any built-in methods to solve this problem.

### Sample Input:

```ts
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
```

### Sample Output:

```ts
[1, 2, 3, 4, 5, 6, 7];
```

## Problem 8:

Create a function **calculateTotalPrice** that accepts an array of product objects. Each product object contains the following properties:

- `name` (string)
- `price` (number)
- `quantity` (number)
- `discount?` (optional number, percentage between 0-100)

The function should return the **total price** of all products in the array, taking into account the discount for each product (if provided).
If the array is empty, return `0`.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- Use array methods (`map`, `reduce`, etc.) to calculate the total.
- The total price of each product is calculated as: `(price * quantity)`.
- Correctly handle products with and without the `discount` property.

### Sample Input:

```ts
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
```

### Sample Output:

```ts
145;
```

## 🎯 Interview Questions - Blog Task

### Blog Post (in Bangla): Answer any 2 of the questions below:

1. What are some differences between interfaces and types in TypeScript?
2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using **union** and **intersection** types in TypeScript.

## ✅ Instructions & Submission Guidelines:

- **Blog:** Write a blog post on **any 2** of the provided topics and include it in this `README.md`.
- **Coding:**
  - Place all your solutions in a single TypeScript file (e.g., [solution.ts](./solution.ts)).
  - Use the exact function names provided in the problems.
  - Your function's output must **exactly** match the sample output provided. This includes punctuation, spacing, and capitalization. Any deviation will result in marks being deducted. For instance, if the sample output is `'Name: John Doe, Age: 30'`, your function must return that exact string. A return value like `'name: John Doe, age: 30'` or `'Name: John Doe,Age: 30'` will be considered incorrect.
  - Use meaningful names for all variables, functions, and classes.
  - Do not include comments like “Problem 1” in your code.
  - Do not include any `console.log` in your final code.