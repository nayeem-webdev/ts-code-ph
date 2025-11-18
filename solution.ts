const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Invalid Input: insert a string, number or boolean");
  }
};

const getLength = (value: string | string[] | number[]) => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error("Invalid Input: Provide a string or an array");
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  if (items.some((book) => book.rating < 1 || book.rating > 5)) {
    throw new Error("Invalid Input: Rating must be between 1 and 5");
  }
  return items.filter((book) => book.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]) => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  let uniqueValue: (string | number)[] = [];
  const isExists = (value: string | number) => {
    for (let i = 0; i < uniqueValue.length; i++) {
      if (uniqueValue[i] === value) {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < arr1.length; i++) {
    if (!isExists(arr1[i])) {
      uniqueValue.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!isExists(arr2[i])) {
      uniqueValue.push(arr2[i]);
    }
  }
  return uniqueValue;
};

const calculateTotalPrice = (
  value: { name: string; price: number; quantity: number; discount?: number }[]
) => {
  const totalPrice = value.reduce((total, product) => {
    const productPrice = product.price * product.quantity;
    if (product.discount) {
      const discountedPrice =
        productPrice - (productPrice * product.discount) / 100;
      return total + discountedPrice;
    }
    return total + productPrice;
  }, 0);
  return totalPrice;
};
