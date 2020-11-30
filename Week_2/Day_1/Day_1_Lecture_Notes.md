## Week 2: Day 1

### Topics
- Intro to testing
- Exporting/Importing code
- External packages


### Intro to testing
- it is very hard to test console logs
- should not mix testing code with production code


### Exporting/Importing code
- importing code
  - we need to require code at the top of our file when we want to import some code into our program
``` javascript  
// for external packages
const assert = require('assert');
// importing our own code using relative path
const ourFunction = require('./ourFunction');
 ``` 
- exporting code
  - when exporting code we need to export it at the end of our file using the module object
``` javascript
module.exports = ourFunction;
```
- instead of reassigning the module.exports with = we can instead add a key to the module.exports object
``` javascript
  module.exports.sayHello = sayHello
  module.exports.aVariable = 2
  // when using it we need to treat it as an object and call methods using dot notation
```
- instead of assigning individual key value pairs we can export a whole object
``` javascript
// preferred method
module.exports = {
  sayHello, 
  aVariable
};
 // when using it we need to treat it as an object and call methods using dot notation
```

### npm
- ```$ npm init``` is used to create a package json file
- npm is like the amazon of packages, can search on npmjs.com and search packages 
- best practice is to save packages as a dependency for your project (```$ npm install --save-dev mocha```)
- 'dev dependency' is what we require whilst we are developing our program a 'dependency' is what our program requires to run
- when running npm install commits do so on the same level as your package JSON
- <b>you can create a .gitignore file - allows our version control to ignore certain files/packages such as node_modules </b> (we can ignore this because when someone who has our file runs their own npm install it will install all of the dependencies in the package.JSON file so they will get their own node_modules)

### Mocha
- has 2 function we can call:
- ```describe()``` 
  - takes 2 arguments descriptor of what we are testing and a callback function
- ```it()```
  - goes inside the describe callback, also takes in a string and and call back function
  ``` javascript
  describe('#ourFunction', () => {
    it('should return a particular thing, when something is ran', () => {
      assert.strictEquals 
    })
  })
  ```

### TDD
- Test Driven Development
  - We write the tests before we write the code that we are developing and tests are driving our development
  - Everything will be failing to start with and we aim to pass all of the tests and we aim to write the minimum amount of code to satisfy the tests


