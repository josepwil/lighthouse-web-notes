## Week 2: Day 2 Asynchronous Control Flow

### Topics
- Asynchronous and Synchronous
- Asynchronous Control Flow
  - setTimeout and setInterval functions
  - file system and asyc nature


### Synchronous
- Often referred to as blocking execution
- Synchronous code: runs one line after another

### Asynchronous
- The opposite of synchronous
- when a task cannot be executed immediately the program will continue on to other things and return to the task later when it is complete

### JS is an Asynchronous Language
- Javascript runs through the code line by line if it hits something that is Asynchronous it adds it to the Event Queue once it has finished running the rest of the Synchronous code in the file it goes back to the Event Queue and runs the Async code that has finished.
- Async code has access to scope in the normal way and variables defined dependent on when our code runs
- Async code are blocking actions generally I/O actions (input/output) and something external to the program
- Anything that we need to pass to the OS (i.e. file system, keyboard presses etc.) is blocking and therefore needs to be handled Asynchronously

``` javascript
const fs = require('fs');
// below is an async action
fs.writeFile('demofile.txt', 'this is new text', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('file written');
  }
})

fs.readFile('demofile.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error)
  } else {
  console.log('the info from the file was', data;
  }
})
```
- if we need to make use of the data returned from an async action we need to use it within the callback of the async action
- if we need data from 2 or more async actions we need to nest them
- can use recursion in async functions if the nesting gets crazy