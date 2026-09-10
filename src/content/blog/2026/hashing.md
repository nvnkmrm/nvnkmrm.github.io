---
title: "Hashing"

description: "Hashing as a Data Structure Concept"

date: "2026-08-29"

tags: ["Data Structure", "Hashing", "Protocol"]

author: "Naveen Kumar"
---

# Hashing

## Data Structure Background

A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.

Different data structures are designed for different use cases.

- **Array** – A collection of elements stored in contiguous memory, typically accessed using an integer-based index. It provides efficient access when the index is known.

- **List** – A sequence of elements that supports adding and removing elements. Depending on the programming language, a list may be implemented using a dynamic array, linked list, or another underlying structure.

- **Hash Table / Hash Map** – A data structure that stores data using **key-value pairs**. A hash function is used to convert a key into a value that helps determine where the corresponding data should be stored.

- **And so on.**

Modern programming languages provide implementations of many common data structures through their built-in types or standard libraries. For example, Java and C# provide collection libraries, while Python provides built-in data types such as `dict` and `list`.

Programming languages expose these data structures through APIs, typically in the form of classes or built-in types. We can create an instance of the required data structure and use the operations provided by its API.

### Examples

**Python**

```python
>>> l = list()

>>> l.append(1)
>>> l.append(2)

>>> print(l)
[1, 2]
[1, 2]
```

**C#**

```csharp
using System.Collections.Generic;

var capitalCities = new Dictionary<string, string>();

capitalCities.Add("Japan", "Tokyo");
capitalCities["France"] = "Paris";
```

The **class API** is the interface that defines the contract for using a data structure. It defines what operations are available, what inputs we can provide, and what outputs or behavior we can expect.

The **class API implementation** contains the internal details of how those operations are performed. This is where the underlying algorithms and data management logic reside.

For example, when we call `capitalCities["France"]`, we don't need to know how the dictionary internally finds `"France"`. The implementation takes care of that for us.

Hashing is one of the techniques used to make this kind of fast lookup possible.

# What Is Hashing?

Hashing is the process of taking an input, called a **key**, and processing it through a **hash function** to produce a deterministic hash value.

A hash function maps a potentially large set of possible inputs to a fixed-size range of values.

For example:

```text
Key → Hash Function → Hash Value
```

The hash value can then be used by a hash table to determine where the associated data should be stored.

It is important to distinguish between the **hash value** and the **array index**.

A hash function may produce a large integer value. The hash table can then transform that hash value into a valid array index, commonly using an operation such as modulo.

The function that performs the hashing process is called a **hash function**.

## A Simple Example of a Hash Function

Let's create a simple hash function for the string:

```text
String = "qwerty"
```

This is only an educational example. Real-world hash functions are considerably more sophisticated.

### 1. Assign an alphabetical position to each character

We assign each character its position in the alphabet.

```text
QWERTY → 17, 23, 5, 18, 20, 25
```

### 2. Multiply each value by the character's position

We multiply each character's alphabetical value by its position in the string.

```text
Q = 17 × 1 = 17

W = 23 × 2 = 46

E = 5 × 3 = 15

R = 18 × 4 = 72

T = 20 × 5 = 100

Y = 25 × 6 = 150
```

### 3. Sum the values

```text
Sum = 17 + 46 + 15 + 72 + 100 + 150

Sum = 400
```

### 4. Convert the hash value into an array index

Suppose our hash table currently has **100 slots**.

We can use the modulo operation to convert the hash value into a valid index:

```text
400 % 100 = 0

Array index = 0
```

Therefore, our simple hashing process determines that the key `"qwerty"` should be placed at index `0`.

The overall process looks like this:

```text
"qwerty"
    ↓
Hash Function
    ↓
400
    ↓
400 % 100
    ↓
0
    ↓
Hash Table Index
```

Again, this is a simplified example to demonstrate the concept. Production hash functions are designed to distribute keys more uniformly and reduce collisions.

# Why Do We Need a Hash Function?

Consider an array.

To access an element directly, we generally need an **integer index**:

```text
array[0]
array[1]
array[2]
```

But what if we want to use something meaningful as the key?

For example:

```text
"Japan"  → "Tokyo"
"France" → "Paris"
"India"  → "New Delhi"
```

An array cannot directly use `"Japan"` or `"France"` as an index.

This is where hashing becomes useful.

A hash function can take a key such as:

```text
"Japan"
```

and convert it into a hash value:

```text
"Japan" → hash function → 123456
```

The hash table can then convert that hash value into an array index:

```text
123456 % table_size → array index
```

This allows us to use keys that are not naturally integer indexes.

When we combine a **hash function with an underlying array-based storage structure**, we get the basic idea behind a **hash table**, commonly exposed by programming languages as a **hash map** or **dictionary**.

```text
Key
 ↓
Hash Function
 ↓
Hash Value
 ↓
Index Calculation
 ↓
Array
 ↓
Stored Value
```

# Hash Map

A **hash map** is a data structure that stores data as key-value pairs.

For example:

```text
Key       Value
-------------------
Japan     Tokyo
France    Paris
India     New Delhi
```

Instead of searching through every key one by one, a hash map uses the key to calculate where the value is likely to be stored.

This is what makes hash maps extremely useful for lookup-heavy operations.

For a well-designed hash table, the following operations are typically **O(1) on average**:

- Adding a key-value pair
- Updating a value
- Removing a key-value pair
- Checking whether a key exists
- Retrieving a value using a key

For example:

```text
capitalCities["France"]
```

The hash map can calculate the location associated with `"France"` and retrieve the value without scanning every element.

## Is Hash Map Really O(1)?

When we say hash map operations are **O(1)**, we generally mean **average-case expected time**, assuming a good hash function and a reasonable load factor.

It does not mean that every operation will always take exactly the same amount of time.

There are several factors involved:

1. Computing the hash of the key
2. Converting the hash into an index
3. Handling possible collisions
4. Accessing the underlying storage

Also, the hash function itself may take time proportional to the size of the key.

For example, hashing a very long string requires processing its characters.

Therefore, `O(1)` should be understood as the expected complexity of the hash table operation with respect to the **number of stored entries**, under normal assumptions.

# Collision

A **collision** occurs when two or more keys produce the same hash index.

For example, consider a hash table of size `5` with the hash function:

```text
hash(key) = key % 5
```

If we insert the following keys:

```text
10 → 10 % 5 = 0
15 → 15 % 5 = 0
20 → 20 % 5 = 0
```

All three keys produce the same index `0`.

```text
10 → 0
15 → 0
20 → 0
```

This is called a **collision**.

Collisions are unavoidable in a general-purpose hash table because we are mapping a potentially enormous number of possible keys into a limited number of storage locations.

Hash tables therefore need a strategy for handling collisions.

There are two common techniques used to handle collisions:

1. **Separate Chaining**
2. **Open Addressing**

---

## Separate Chaining

**Separate Chaining** is a collision-handling technique where each position in the hash table can store multiple elements.

When multiple keys generate the same index, they are stored together in a **chain**, usually using a linked list.

For example:

```text
Hash table size = 5

10 → 10 % 5 = 0
15 → 15 % 5 = 0
20 → 20 % 5 = 0
```

Since all three keys produce index `0`, they are stored in the same chain:

```text
Index 0 → 10 → 15 → 20
Index 1
Index 2
Index 3
Index 4
```

Here, the hash table does not need to find another empty index. Instead, it keeps the collided elements together at the same index.

### Advantages of Separate Chaining

- Simple to implement.
- Multiple elements can be stored at the same index.
- Deletion is relatively simple.
- The hash table can store more elements than the number of available indexes.

### Disadvantages of Separate Chaining

- Requires additional memory for storing the chains.
- Searching can become slower when a chain becomes long.
- Extra pointer/reference overhead may be required when using linked lists.

---

## Open Addressing

**Open Addressing** is another technique for handling collisions.

In Open Addressing, all elements are stored **directly inside the hash table**.

When a collision occurs, the hash table searches for another empty position to store the element.

For example:

```text
Hash table size = 5

10 → 10 % 5 = 0
15 → 15 % 5 = 0
```

The key `15` also wants to occupy index `0`, but index `0` is already occupied by `10`.

Instead of storing both elements at index `0`, Open Addressing searches for another empty position.

```text
Index 0 → 10
Index 1 → 15
Index 2
Index 3
Index 4
```

The process of finding another position is called **probing**.

There are three common probing techniques:

### 1. Linear Probing

Search for the next available position one by one.

```text
0 → occupied
1 → empty ← store here
```

### 2. Quadratic Probing

Search for another position using increasing squared intervals.

```text
h(k)
h(k) + 1²
h(k) + 2²
h(k) + 3²
...
```

### 3. Double Hashing

Use a second hash function to determine the next position.

```text
index = h1(key) + i × h2(key)
```

---

## Separate Chaining vs Open Addressing

The main difference is how they handle a collision.

### Separate Chaining

```text
Collision
   ↓
Store multiple elements
in the same bucket
```

Example:

```text
Index 0 → 10 → 15 → 20
```

### Open Addressing

```text
Collision
   ↓
Find another empty position
```

Example:

```text
Index 0 → 10
Index 1 → 15
Index 2 → 20
```

Therefore:

> **Separate Chaining stores collided elements together, while Open Addressing finds another empty position in the hash table.**

# Disadvantages of Hash Maps

Hash maps provide very fast average-case lookup, but they also have some trade-offs.

## 1. Hashing Has Computational Overhead

Unlike directly accessing an array by an integer index, a hash map needs to perform additional work.

For example:

```text
Key
 ↓
Hash Function
 ↓
Index Calculation
 ↓
Lookup
```

This additional computation introduces overhead.

For small collections or situations where direct indexing is sufficient, an array may be simpler and more efficient.

Also, the cost of computing a hash can depend on the key. Hashing a short integer is generally much cheaper than hashing a very large string.

## 2. Resizing Can Be Expensive

Hash tables generally maintain a **load factor**, which represents how full the table is.

When the table becomes too full, the implementation may allocate a larger underlying array.

Existing entries then need to be redistributed into the new table.

For example:

```text
Before resizing:

[ Entry ][ Entry ][ Empty ][ Entry ]

                ↓
             Resize

After resizing:

[ Empty ][ Entry ][ Empty ][ Entry ][ Empty ][ Entry ][ Empty ][ Empty ]
```

Because the size of the underlying array has changed, the existing entries may need to be **rehashed or redistributed** according to the new table size.

This operation can be expensive because many existing entries have to be processed.

However, resizing does not happen on every insertion. Because of this, hash table insertion is generally considered **amortized O(1)**.

## 3. Additional Memory Usage

Hash maps usually require more memory than a simple array.

The implementation needs additional space for things such as:

- Empty slots
- Hash table metadata
- Collision-resolution structures
- Resizing capacity

For a small number of entries, this additional memory can be noticeable.

For example, if we store only a few key-value pairs in a hash map, the underlying table may still contain many unused slots to maintain an appropriate load factor.

Therefore, hash maps trade some additional memory usage for fast average-case lookup.

# Set

A **set** is another data structure that commonly uses hashing internally.

The key difference is that a set stores **unique values** rather than mapping keys to separate values.

For example:

```text
Set = {10, 20, 30}
```

If we try to add `20` again:

```text
Set = {10, 20, 30}

Add 20

Set = {10, 20, 30}
```

The value is not added again because sets maintain uniqueness.

Conceptually, a hash set can be thought of as using the value itself as the key:

```text
Hash Map:

Key    → Value
----------------
A      → Apple
B      → Banana


Hash Set:

Value
------
Apple
Banana
```

Like a hash map, a hash set can provide **O(1) average-case** insertion, lookup, and deletion.

A set is also generally **unordered** in the sense that elements are not maintained according to their natural ordering. However, the exact iteration-order guarantees depend on the programming language and implementation.

# Summary

Hashing is a technique that allows us to efficiently map keys to locations in a data structure.

The basic idea is:

```text
Key
 ↓
Hash Function
 ↓
Hash Value
 ↓
Index Calculation
 ↓
Hash Table
 ↓
Value
```

Hash maps use this technique to provide fast **average-case O(1)** insertion, lookup, update, and deletion.

However, hashing also introduces trade-offs:

- Hash computation has overhead.
- Collisions need to be handled.
- Resizing can temporarily be expensive.
- Hash tables generally consume more memory than simple arrays.

## Understanding these trade-offs is important because hashing is not just a feature provided by a programming language—it is a fundamental data-structure technique used to build efficient lookup systems.
