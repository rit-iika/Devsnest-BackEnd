//memory and space in browser is less
//thus we cannot use multithreading in browsers.
//event loop is an algorithm, that handles async nature of javascript.
/*
1. what is sync async?
working can be done in 2 types, 1 to wait for first task to complete and then move ahead.
second, to move ahead while pervious tasks running simultaneously.
second one is async nature, and first one is , sync nature.

2. what is javascript?
javascript is a single-threaded, non-blocking, asynchronous, concurrent language.
it has call stack, event loop, call back queue, and other apis.

3. what is single threaded and multi threaded?
Single threaded processes contain the execution of instructions in a single sequence.
In other words, one command is processes at a time.
The opposite of single threaded processes are multithreaded processes.
These processes allow the execution of multiple parts of a program at the same time.
These are lightweight processes available within the process.

4. what is V8?
V8 is a compiler, developed by google to compile js fastly.
it has only call stack and heap.
heap is used to allocate memory.
and call stack stores execution part.

5. what is call stack?
js has one thread==one call stack==one thing ata a time
working of call stack....
main() is first to go inside call stack , then other functions go.
a recursive function, fulls the call stack, which will result into error of
maximum call stack size exceeded error. like we get in infinite loop.

6. what is event loop?

7. nodejs is single threaded?
Node.js is single-threaded similar to Javascript. 
So, your JS code is running in a single thread(main thread) in consensus with the 
event loop and callback queue.

*/
