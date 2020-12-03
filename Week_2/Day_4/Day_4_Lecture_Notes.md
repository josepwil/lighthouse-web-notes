## Week 2: Day 4 Promises

### Topics
- Introduction to Promises
- Sequencing of async tasks without the "callback waterfall" (callback hell) problem
- Error handling with Promises (vs callbacks)
- Optional: Parallelizing async things (Promise.race and Promise.all)
- Creating our own Promises

### Callbacks
- using multiple nested callbacks we get 'callback waterfall' / 'callback hell' etc.

### Promises
- Promise is actually a JS object
- something we can get back from async functions
- Promises can exist in one of three states
  - Pending 
  - Resolved
  - Rejected
- We can call ```.then()``` on our promise ```.then()``` takes a callback which is called whenever our promise resolves
``` javascript
promise.then((data) => {
  console.log(data);
})
```
- this is how we 'consume' promises and get the value back from them
- if your callback <b>returns</b> anything at all (if it not a promise JS will put a Promise wrapper on it and immediately resolve it) we can then chain ```.then()``` on to it
``` javascript
const promiseTwo promise.then((data) => {
  console.log(data);
  // JS puts a promise wrapper around returned value if not a promise
  return 'another thing'
})
.then((data) => {
  console.log(data);
})
```

### Error Handling with Promises
- we can use the ```.catch()``` method which catches errors 
``` javascript
.catch((err) => {
  console.log(err);
})
```
- we only need to put one ```.catch()``` at the end of our promise chain
- if anything in the chain errors out it will walk down and the chain and look for a ```.catch()```

### To Avoid
- Do not end up nesting your promises make sure you explicity ```return``` from a ```.then()``` and then you can call ```.then()``` on it again

### Parallelizing async things (Promise.race and Promise.all)
  - ```Promise.all()``` allows us to gather up a whole bunch of promises together and turn them into a single promise to resolve
  - how do we do this? we can treat them like javascript objects 
  ``` javascript
const promiseOne = returnPromise('one')
const promiseTwo = returnPromise('two')
const promiseThree = returnPromise('three')

const promises = [promiseOne, promiseTwo, promiseThree]

Promise.all(promises)
  .then((data) => {
    console.log(data)
  })
  ```
  - ```Promise.all()``` takes an array of promises and resolves them at the same time, our return value is an array of all of the invidual return values in the exact same order they were in the array we passed in
  - ```Promise.all()``` an all or nothing if any of the promises reject we don't get any of the values

### Choosing between chaining promises and using ```Promise.all()```
  - if they depend on each other we need to chain them
  - if they don't care about each others return values then we can run them in parallel using ```Promise.all()```

### ```Promise.race()```
 - Takes an array of promises and returns the value for <b>only</b> the first promise that resolves


 ### Creating our own promises
  - Very very rare you would ever create your own promise, 99.99999% of the time we would get a promise back from a function call



