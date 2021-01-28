## Day 3 Lecture Notes - Class-based Components

## Topics
- Review of Classes and OOP (good as a segway into Ruby tomorrow!)
- History of Class-based Components in React
- Syntax
- Important Lifecycle Methods
- Pros and Cons
- Trends with Class-based Components in React


## JS Classes
- es6
- classes in js are syntactic sugar
  - functions that return objects, no true class structure in js
- main method is the constuctor called once everytime a new instance of a class is created
- to create an instance of a class we use the 'new' keyword

## Class Based React Components
- class based/functional components are not in conflict
- class get initialized once (create the component object once)
- run certain methods throughout the component lifetime (render method runs just as many times as functional components would)
- constructor will be run first mount (the first time component is needed by the dom) of component
- can initialize state inside a constructor using this.state ```this.state = {} ```or outside a constructor omitting 'this' e.g. ```state = {} ```
- when we write a method permanently bind this to the component when triggering method by an event
- use write your methods using an arrow function
- only have access to props in state when doing it in the constructor and then need to pass props as an arugment into our contstructor

## Lifecycle Methods (Side Effects)
- ```componentDidMount()``` (will run once after component first rendered to the dom)
  -like a use effect with [] empty render dependency
- ```componentDidUpdate()``` (will run everytime (props or state change) component render() )
- ```componentWillUnMount()``` (will run once before component is removed from the dom)
  - good for cleanup