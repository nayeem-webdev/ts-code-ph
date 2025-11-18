## Type এবং Interface এর মধ্যে পার্থক্য

type এবং interface দুটোই প্রায় একই কাজ করে, তবে এদের কিছু পার্থক্য আছে। প্রথমত **type Alias** আমরা **type** keyword দিয়ে declare করি এবং নাম এর পর "=" ব্যাবহার করি।

```typescript
type Item = { name: string; id: number };
```

interface আমরা **interface** keyword দিয়ে declare করি এবং কোনো প্রকার symbol (**যেমন: =)** ব্যবহারের প্রয়োজন হয় না।

```typescript
interface Person {
  name: string;
  age: number;
}
```

**Type Alias** পুনরায় ঘোষণা করা যায় না; করলে **error** দেখাবে। অন্যদিকে, **Interface** পুনরায় ঘোষণা করা যায় এবং TypeScript স্বয়ংক্রিয়ভাবে দুটি কে **merge** করে দেয়।

২ টি আলাদা type Alias কে marge করতে আমরা `&` operator ব্যাবহার করি:

```typescript
type Sales = Item & { qty: number };
```

অন্যদিকে interface কে marge করতে `extends` ব্যাবহার করি:

```typescript
interface Employee extends Person {
  role: string;
}
```

type Alias দিয়ে আমরা Primitives টাইপ define করতে পারি:

```typescript
type Count = number;
```

এবং Unions এর সাহায্যে একটি value এর একাধিক data type define করতে পারি:

```typescript
type Role = "admin" | "guest";
```

এবং Tuples এর মাধ্যমে একটি array এর ভিতর কোন ধরনের data থাকবে তা define করতে পারি:

```typescript
type KeyValue = [string, number];
```

type Alias এর অতিরিক্ত feature আছে যেমন Mapped Types, Conditional Types, and Template Literal Types যা interface এ support করে না।

## `any`, `unknown`, এবং `never` টাইপ এর পার্থক্য

আমরা জানি যে TypeScript এ আমাদের Data type define করতে হয়। কিন্তু এই security check টা কে bypass করার জন্য আমাদের কাছে তিন ধরনের Data type আছে যেমন any, unknown, and never। তার মধ্যে any and unknown প্রায় একই রকম কাজ করে কিন্তু তাদের মধ্যে কিছু আলাদা বৈশিষ্ট্য আছে। যে data type সম্পর্কে আমাদের পূর্ব থেকে ধারণা থাকবে না, ওই ক্ষেত্রে আমরা any ব্যবহার করতে পারি। যেমন:

```typescript
let value: any = "Hello";
```

পরবর্তীতে এইটা কে আমরা number type ব্যবহার করে reassign করতে পারি:

```typescript
value = 10;
```

এই ক্ষেত্রে আমরা কোনো ধরনের error পাব না, even আমরা any data type এ যে কোনো ধরনের method apply করতে পারবো যেমন:

```typescript
let newValue: string = value.toUpperCase();
```

যদিও বা number এ কোনো ধরনের string method চালানো যায় না, কিন্তু any type use করলে আমরা তা করতে পারি। এই জন্য any type কে less secure ধরা হয়।

any replacement এ আমরা unknown ব্যবহার করতে পারি, এটি অনেক ক্ষেত্রে secure। এটা data type কে narrow down করে।
for example:

```typescript
let value: unknown = "Hello";
```

পরবর্তীতে any এর মতো আমরা number type ব্যবহার করে reassign করতে পারি:

```typescript
value = 10;
```

এবং TypeScript কোনো ধরনের error দেবে না। কিন্তু any এর মতো আমরা ইচ্ছা মতো **method** চালাতে পারবো না। **method** চালাতে আমাদের data type narrow down করতে হবে।

```typescript
const unknownValue = (value: unknown) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value - 5;
  } else {
    return "Unknown Value";
  }
};
```

অন্য দিকে never হচ্ছে যেখানে value কখনো create হবে না অথবা যে function কিচ্ছু return করবে না, ওই ক্ষেত্রে ব্যবহার করা হয়।

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

এই function কোনো ধরনের data return করবে না। যেহেতু dead end তাই error message পাঠাবে।

```

```
