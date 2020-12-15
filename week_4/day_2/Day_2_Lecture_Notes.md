## Day 2 Lecture Notes - Client Side JavaScript & jQuery


## Topics
Intro to Client Side JS 
- Intro to the DOM
- Events and event propagation
- The event object
- The window object
- The navigator object
- The document object
- Using DevTools (Sources Tab) & debugger

Intro to jQuery 
- Why does it exist?
- How much additional behavior does it add to the browser?
- Library or framework? Why?
- Why is it important to learn / use jQuery ?
- Event handling with jQuery
- Element creation with jQuery


### node !== js
- Node is one possible runtime (environment) for javascript 
- v8 Engine by Google allows Node creation


### jQuery
- "write less, do more"
- There are many ways to do the same thing

### What jQuery does for us?
- DOM Manipulation
- Browser (DOM) Events
- Effects & Animations
- AJAX
- Plugins
  - many different plugins that allow you to do different things


### Live coding
- jQuery
  - ``` $('input[name="content"]'); ```
  ``` javascript
  let newToDo = $('<li>').text(toDoName).appendTo(ul); // createElement('li')
  ```



