## Day 4 Lecture Notes 

### Topics
- Functions as values
- Function declaration vs function expression
- What are anonymous functions
- arrow functions
- function calling vs passing
- callback functions and higher order functions


### Functions as values
- We can pass reference to function into another function
- a callback is a parameter that we pass to a function that is itself a function
- when you have a function that receives a call back they are sometimes referred to as higher order functions
- functions are first class citizens - functions we can call but also values/variables in their own right

### Arrow function
- still a functional expression 
- we can drop the function keyword
``` javascript 
// functional declration
function exampleFunction() {
  console.log('Hi')
}
// functional expression
const exampleFunction = function() {
  console.log('hi');
}
// functional arrow expression
const exampleFunction = () => {
  console.log('I am an arrow function');
}
```
- some advantages easier/quicker to write
- difference is when using the this keyword
- if one liner can omit the {} when using arrow function
``` javascript
const exampleFunction = () => console.log('one liner');
```
- in most cases you will want to use the functional expression syntax

### Anonymous Function
  - a function without a name

### Callbacks
- can make your code more modular
- can make your code dryer



