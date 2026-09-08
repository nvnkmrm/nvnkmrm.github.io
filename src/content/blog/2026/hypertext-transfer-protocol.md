---
title: "Hypertext Transfer Protocol (HTTP)"
description: "Hypertext Transfer Protocol"
date: "2026-02-13"
tags: ["Network", "Computer Network", "Protocol"]
author: "Naveen Kumar"
---

---

# Hypertext Transfer Protocol (HTTP)

HTTP (Hypertext Transfer Protocol) is an application-layer protocol used for communication between clients and servers over a network.

It defines how a client can **request a resource or perform an operation** and how a server can **respond to that request**.

HTTP is commonly used to exchange resources and their representations, such as HTML documents, images, videos, PDF files, and JSON data used by APIs.

At a high level, HTTP follows a **request-response model**:

```text
Client
   |
   | HTTP Request
   ↓
Server
   |
   | HTTP Response
   ↓
Client
```

# Breakdown of HTTP

The name **Hypertext Transfer Protocol** can be understood by breaking it into three parts:

- Hypertext
- Transfer
- Protocol

## Hypertext

The term **"hyper"** means "beyond."

Traditional text is generally organized in a linear or sequential structure. For example, when reading a book, we typically move from one page to the next.

Hypertext provides a non-linear way of organizing information. It allows a piece of text to contain references, commonly called **hyperlinks**, to other resources.

Instead of reading information sequentially, a reader can follow a link and jump directly to related information.

For example:

```text
Webpage A
   |
   | hyperlink
   ↓
Webpage B
   |
   | hyperlink
   ↓
Webpage C
```

This creates a network of interconnected resources rather than a single linear document.

A practical implementation of hypertext can be seen on webpages. A hyperlink can take us from one webpage to another, or to another resource such as a document, image, or video.

The **World Wide Web** is built around this concept of interconnected resources.

## Transfer

**Transfer** refers to the exchange of data between systems over a network.

In the context of HTTP, a client and server exchange HTTP messages.

For example:

```text
Client → HTTP Request → Server

Client ← HTTP Response ← Server
```

The request may contain information such as:

- Which resource the client wants
- The HTTP method
- Headers
- Optional request data

The response may contain:

- A status code
- Response headers
- The requested representation or other response data

It is important to note that HTTP itself does not provide all aspects of reliable network delivery.

For example, HTTP/1.1 and HTTP/2 commonly operate over TCP, while HTTP/3 operates over QUIC. The underlying transport provides mechanisms such as reliable delivery where applicable.

Therefore, HTTP primarily defines **how application-level communication is structured**, rather than being responsible for every aspect of network transmission.

## Protocol

A **protocol** is a set of rules, conventions, and message formats that define how systems communicate.

Devices connected to a network may use different hardware, operating systems, and software. A common protocol allows these systems to communicate using a shared set of rules.

In simple terms, a protocol acts like a **common language** between communicating systems.

For example, HTTP defines rules for:

- How requests are structured
- How responses are structured
- What different methods mean
- How status codes communicate the result of a request
- How metadata is represented using headers

Because both the client and server understand these rules, they can communicate even when they are built using completely different technologies.

# What Is HTTP?

HTTP is an **application-layer protocol** that defines how clients and servers communicate.

HTTP is one of the fundamental protocols used by the **World Wide Web**.

From the perspective of the OSI model, HTTP operates at **Layer 7 — the Application Layer**.

A browser, mobile application, or backend service can create an HTTP request at the application layer. The request is then passed to lower layers of the networking stack for transmission across the network.

A simplified view looks like this:

```text
Application Layer
       |
       | HTTP
       ↓
Transport Layer
       |
       | TCP / QUIC
       ↓
Network Layer
       |
       | IP
       ↓
Data Link / Physical
```

The exact networking stack depends on the HTTP version and the underlying network technologies.

HTTP follows a **client-server model**.

The basic communication flow is:

1. A client sends an HTTP request.
2. The server receives and processes the request.
3. The server sends an HTTP response.
4. The client processes the response.

For example:

```text
Client                         Server
  |                              |
  |  HTTP Request                |
  |----------------------------->|
  |                              |
  |       Process Request        |
  |                              |
  |  HTTP Response               |
  |<-----------------------------|
  |                              |
```

This request-response model forms the foundation of HTTP communication.

# How HTTP Fits Into the Web

## World Wide Web and Internet

The **Internet** and the **World Wide Web (WWW)** are related but are not the same thing.

The **Internet** is a global network of interconnected networks that provides connectivity between computers, servers, phones, and other devices.

The **World Wide Web** is a system of interconnected resources that is built on top of the Internet.

These resources can include:

- Webpages
- Documents
- Images
- Videos
- Other web resources

Resources on the Web can be connected through hyperlinks, allowing users to navigate from one resource to another.

A simplified way to think about the relationship is:

```text
World Wide Web
       |
       | uses
       ↓
     HTTP
       |
       | operates over
       ↓
 Internet
       |
       ↓
Underlying network infrastructure
```

The Internet provides the connectivity, while the Web provides a system for accessing and linking resources using technologies such as HTTP, URLs, HTML, and web browsers.

Therefore:

> **The Internet is the network infrastructure, while the Web is a system of interconnected resources that uses that infrastructure.**

HTTP is one of the important protocols that enables communication on the Web.

# Types of Resources Transferred via HTTP

HTTP can be used to exchange many different types of data.

Examples include:

- **HTML documents** — used to construct webpages
- **Images** — JPEG, PNG, WebP, SVG, etc.
- **Videos** — MP4 and other formats
- **PDF files**
- **JSON data** — commonly used by APIs
- **Plain text**
- **CSS and JavaScript files**

The type of content being exchanged can be described using HTTP headers.

For example:

```text
Content-Type: application/json
```

This tells the client that the response contains JSON data.

Another example:

```text
Content-Type: text/html
```

This indicates that the response contains HTML.

# HTTP Request and Response

The request-response model is at the heart of HTTP.

A simplified HTTP request can look like:

```http
GET /users/123 HTTP/1.1
Host: example.com
Accept: application/json
```

The client is essentially saying:

> "Give me the representation of the resource at `/users/123`."

The server may respond with:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 123,
    "name": "John"
}
```

The response contains:

- **Status code** — `200 OK`
- **Headers** — such as `Content-Type`
- **Response body** — the actual data

This simple exchange demonstrates one of the fundamental ideas behind HTTP:

```text
Client
  |
  | GET /users/123
  |
  ↓
Server
  |
  | 200 OK
  | application/json
  | { ... }
  ↓
Client
```

# Summary

HTTP is an **application-layer communication protocol** used extensively by the World Wide Web.

The name can be understood as:

```text
Hypertext
    ↓
Interconnected resources

Transfer
    ↓
Exchange of data between systems

Protocol
    ↓
Rules for communication
```

HTTP uses a client-server request-response model:

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
HTTP Response
   ↓
Client
```

HTTP can be used to exchange many types of resources and data, including HTML, images, videos, documents, and JSON.

Understanding HTTP is fundamental to understanding how browsers, web applications, APIs, and distributed systems communicate.

# References

- [Hypertext - Wikipedia](https://en.wikipedia.org/wiki/Hypertext)
- [Hypertext - GeeksforGeeks](https://www.geeksforgeeks.org/websites-apps/what-is-hypertext/)
- [Network Protocol - Cloudflare](https://www.cloudflare.com/en-gb/learning/network-layer/what-is-a-protocol/)
- [Network Protocol - CompTIA](https://www.comptia.org/en-us/blog/what-is-a-network-protocol/)
- [World Wide Web - GeeksforGeeks](https://www.geeksforgeeks.org/computer-networks/world-wide-web-www/)

---
