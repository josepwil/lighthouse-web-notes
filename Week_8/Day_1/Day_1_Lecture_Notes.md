## Day 1 Lecture Notes - Unit & Integration Testing

## Topics
- Tools for testing React
- Coverage Reports
- Add Features/Tests to our App
- 'debug()' and 'prettyDOM()'
- Mocking AJAX Requests and Functions


- Testing library, for testing the dom
  - @testing-library
- beforeEach()
  - when we want to test our application we want our fake state to be as close to the real state as possible 
  - beforeEach is called before each test

## Coverage Reports
- can access the index inside the coverage folder and open it in our browser for a closer look

## writing test cases
query - asking a question, is this thing in the dom or not, returns dom element or null (synchronous)
get - it it gets the element it gives it to you if it doesn't it throws an error (synchronous)
find - returns a promise (asynchronous)

## getByTestId
- if you use global you need to reference the container
- if you use return function from render it knows the container

## 'debug()' and 'prettyDOM()'
- Different ways to visualize the DOM
- can pull debug from render and just call it debug(), will console.log the dom to the terminal

## Mocking Ajax Requests and Functions
- If you return an ajax promise in Jest it will wait until the promise resolves/rejects


