# What is Node.js?

Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance applications. Node.js uses an event-driven, non-blocking I/O model, making it efficient for handling concurrent requests.

## V8 Engine Explained

The V8 engine is an open-source JavaScript engine developed by Google, written in C++. It is designed to execute JavaScript code at high speed and is used in Google Chrome and Node.js. V8 compiles JavaScript to native machine code before executing it, which significantly improves performance.

- **Just-In-Time (JIT) Compilation:** V8 uses JIT compilation, compiling code on the fly as it is executed, optimizing performance for frequently run code paths.
- **Garbage Collection:** V8 includes a garbage collector to manage memory automatically, ensuring efficient memory usage.
- **Performance:** The V8 engine is known for its speed and efficiency, making it a popular choice for running JavaScript applications in both browsers and server environments like Node.js.

Node.js is built on top of the V8 engine, allowing it to execute JavaScript code outside of a web browser.

## Node.js Architecture

- **Event Queue:** When any request comes in, it is added to the event queue.
- **Event Loop:** The event loop continuously checks the event queue for new requests and processes them one by one. It watches the event queue and executes the callback functions associated with each event based on the FIFO (First-In-First-Out) principle.

### Types of Request/Operations

1. **Blocking Operations:** These block the event loop until the request is completed. If a blocking request comes in, it goes to the thread pool. If a worker thread is available, the request is assigned to that worker thread. If no worker thread is available, it waits until one becomes available.
2. **Non-blocking Operations:** These do not block the event loop, allowing it to continue processing other requests while waiting for the response.

- **Thread Pool:** This is a pool of threads responsible for handling blocking operations. It consists of multiple worker threads.

- **Default Threads Number :** 4
  if 8 core cpu - Max Threads = 8

# Versioning in Node.js

Eg.4.18.3

- Major Version: 4
- Minor Version: 18
- Patch Version: 3 ( optional )

- ^ = Install all recommended and minor fixes automatically
- ~ = Can install major version automatically
