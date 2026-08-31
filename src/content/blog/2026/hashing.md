---
title: "Hashing"

description: "Hashing as a Data Structure Concept"

date: "2026-08-29"

tags: ["Data Structure", "Hashing", "Protocol"]

author: "Naveen Kumar"
---

# Hashing

## Data Structure Background

A data structure is a format for organizing data in a structured way. This organization of data helps us read and write data efficiently.

There are different data structures designed for specific purposes.

- **Array** – Simple, fixed-size data structure with integer-based indexing. Supports efficient access by index.
- **List** – A dynamic array. Its size can grow or shrink as needed.
- **Hashing** – A powerful technique for storing and retrieving data using key-value pairs. The key can be of various types, and hashing involves computation to determine where the data should be stored.
- **And so on.**

Modern programming languages ship with implementations of most common data structures as part of their built-in packages or standard libraries. For example, Java and C# provide collection libraries, while Python provides built-in data types such as `dict` and `list`.

Programming languages expose these data structures through APIs, typically in the form of classes. We can import the required library if it is not available out of the box, instantiate the class, and call its methods using the object.

### Examples

**Python**

```python
>>> l = list()

>>> l.append(1)

>>> l.append(2)

>>> print(l)

[1, 2]
```

**C#**

```csharp
using System.Collections.Generic;

var capitalCities = new Dictionary<string, string>();

capitalCities.Add("Japan", "Tokyo");

capitalCities["France"] = "Paris";
```

The **class API** is an interface that defines the contract for using the data structure. It defines what inputs we can provide and what outputs we can expect.

The **class API implementation** defines the internal details of the data structure. This is where the actual operations take place. The implementation does the heavy lifting by handling the intricate details of the underlying algorithms and data management.

# What Is Hashing?

Hashing is the process of converting an input of any type into a deterministic integer value. The output will always fall within a predefined range set by the programmer.

The function that performs this process is called a **hash function**.

The example below demonstrates the process of hashing a string.

**String = `qwerty`**

### 1. Assign the alphabetical position to each character

We assign the alphabetical position of each character in the string.

```text
QWERTY → 17, 23, 5, 18, 20, 25
```

### 2. Multiply each value by the character's position

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

### 4. Apply the modulo operation

We apply the modulo operation to the sum using the upper bound defined by the programmer.

If the upper bound is **100**, then:

```text
Sum = 400

400 % 100 = 0

Final value = 0
```
