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
