1. What are some differences between interfaces and types in TypeScript?
   ANS: type এবং interface দুটোই প্রায় একই কাজ করে, তবে এদের কিছু পার্থক্য আছে। প্রথমত **type Alias** আমরা **type** keyword দিয়ে declare করি এবং নাম এর পর "=" ব্যাবহার করি। `type Item = {name: string, id: number}` interface আমরা **interface** keyword দিয়ে declare করি এবং কোনো প্রকার symbol (**যেমন: =)** ব্যবহারের প্রয়োজন হয় না `interface Person { name: string; age: number;}`। **Type Alias** পুনরায় ঘোষণা করা যায় না; করলে **error** দেখাবে। অন্যদিকে, **Interface** পুনরায় ঘোষণা করা যায় এবং TypeScript স্বয়ংক্রিয়ভাবে দুটি কে **merge** করে দেয়। ২ টি আলাদা type Alias কে marge করতে আমরা `&` operator ব্যাবহার করি `type Sales = Item & { qty: number };`, অন্যদিকে interface কে marge করতে `extends` ব্যাবহার করি `interface Employee extends Person { role: string;}`। type Alias দিয়ে আমরা Primitives টাইপ define করতে পারি `type Count = number;`। এবং Unions এর সাহায্যে একটি value এর একাধিক data type define করতে পারি `type Role = "admin"|"guest"` এবং Tuples এর মাধ্যমে একটি array এর ভিতর কোন ধরনের data থাকবে তা define করতে পারি `type KeyValue = [string, number];`। type Alias এর অতিরিক্ত feature আছে যেমন Mapped Types, Conditional Types, and Tamplate Literal Types যা interface এ support করে না।

2. What is the use of the `keyof` keyword in TypeScript? Provide an example.


3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using **union** and **intersection** types in TypeScript.
