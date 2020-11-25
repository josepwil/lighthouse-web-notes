## Day 3 Lecture Notes

### Topics
- Primitive data types
- Objects Fundamentals
- Functions as object methods

### Objects
- Keys stored as strings so can drop the quotations as javascript knows they are strings
- to get object data, can use dot notation or bracket notation (when using bracket notation key must be in quotation marks - because it gets evaluated in the bracket before doing the lookup)
- can reassign the value of a key value pair too dogs.rover = "a new value"
- can also use to to add a new key value pair dogs.newKey = "new value"
- to remove key value pair: delete dogs.spot 

### Why square bracket notation
- can use executable javascript within square bracket
- when we want to dynamically retrieve data and use that as a key

### Why dot notation
- less characters
- considered cleaner
- as a general rule of thumb always use dot notation unless you need to access an object property with a variable

### Objects continued
- Can chain dot & bracket notation
- Can assign a value as a function (known as a method)

### Primitive type values
- Strings, numbers, values, Nan, Undefined (anything that is <b> not an array or an object</b>)

### Objects (and arrays) are not primitive data types
- If we copy an object and make changes to the copy it will change the original object too!
- Same thing will happen with arrays

### Objects continued 
- can loop over objects using for...in loop to make a copy 
- or you can use the spread operator let trueCopy = {...obj};
- <b>Always use Const for objects and arrays</b>

### Const vs let
  - when const variable is passed into a function it essentially creates a new variable at the top of function which is a let 
   ``` javascript 
  const primative = 25;

  const update = function (value) {
    // creates let value artificially 
    let value = primative
    value = 26;
    return value;
  }
  update(primative);
  ```

### Objects continued
  - anytime you are copying an array or object, you need to be careful you are not mutating the original array unless you want to

### this keyword
  - can be used inside of methods, the keyword this will be bound or mean different things depending on its concept
  - in global scope 'this' refers to the window object in browser context
  - when you use 'this' inside of a method it is going to try and refer to the object the method is in
  - if you're not sure you can always console log 'this' to see what it is referring to






