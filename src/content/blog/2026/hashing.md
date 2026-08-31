---
title: "Hashing"
description: "Hypertext Transfer Protocol"
date: "2026-08-29"
tags: ["Data Structure", "Hashing", "Protocol"]
author: "Naveen Kumar"
---

# Hashing

## Data Structure Background

Data structure is format for organising the data in structured way. This organization of data helps in efficient reading and writing.

There are different data structures out there designed for specific purpose.

- Array - Simple, fixed size integer index, support, fetch by index.
- List - Dynamic array. Size are determined by
- Hashing - Powerful, Key value pair, index can be of any time. Comes with computation.

and etc.

Modern programming languages ships with most data structure implementation in built in the form of packages or library. Example collection in Java and C#, For python, default n built data types dict, list.

Programming languages exposes the data structure in the form API class. We can import the library (if it not come out of the box or unlike python), instantiate the class, call the method using the object.

### Examples

**Python**

```
>>> l = list()
>>> l.append(1)
>>> l.append(2)
>>> print(l)
[1, 2]
```

**C#**

```
using System.Collections.Generic;

var capitalCities = new Dictionary<string, string>();

capitalCities.Add("Japan", "Tokyo");
capitalCities["France"] = "Paris";
```

Class API is a interface that defines the contract on how to use the data structure, it defines what input we pass and what out we can expect.

Class API implementation define internal detail of the data structure. This is where actual operation takes place. Implementation does the heavy lifting by handling intricate details of the algorithm.

# What is Hashing

Hashing a process of convert input of any type to deterministic integer. Output will always be within the range setup with the programmer.

Function which does this process is called hash function.

Example below demonstrate the process of hashing a string.

String = qwerty

1. Assign the value of alphabets position to each character in the string.

QWERTY → 17, 23, 5, 18, 20, 25

2. Multiple the value with character position of the character position.

Q = 17 × 1 = 17
W = 23 × 2 = 46
E = 5 × 3 = 15
R = 18 × 4 = 72
T = 20 × 5 = 100
Y = 25 × 6 = 150

3. Sum the value

Sum = 17 + 46 + 15 + 72 + 100 + 150 = 400

4. Mod the sum value by upper most value set by the programmer.

If the upper-most value is 100, then:

Sum = 400

400 % 100 = 0

Final value = 0
