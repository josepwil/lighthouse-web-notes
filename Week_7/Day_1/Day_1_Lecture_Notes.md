## Day 1 Lecture Notes - Component-Based UI w/ React

## Topics
- Review important concepts from the weekend
- Review ES6 features including object/array destructuring, spread and property shorthand
- Convert interface designs to component-based UI
- Create a project with Create React App
- Build components in isolation with Storybook
- Using components in an application


## What is React?
- A js library for building fast and interactive ui for web as well as mobile applicaions
- it is open-source, reusable component based library
- Front End runs on the browser
- MVC (model view controller) architecture React is the 'View' which is responsile for how the app looks and feels

## What is the main difference between react and jquery
- react is declarative (jquery is imperative)

## Components 
- everything in a web app can be broken down into components

## JSX
- Javascript Syntax Extension 
- the language of react
- used with react to describe what the ui should look like
- essentially js and html together
- embedding JS variables in markup
- similar to EJS in an Express App (but much more powerful)

## The virtual DOM
- real DOM what your browser sees
- React makes changes to the virtual dom (a lightweight representation of the Real DOM that React keeps in memory)
- React will only change the specific object in the real DOM only changing the things that need to be changed, the way jquery does it for example is re-rendering the whole real DOM each time a change is made which is slower

## Create a React app
- Often you'll see it called CRA 
- we used NPX to create it
  - npx allows us to run a node module without installing it

## Anatomy of a React app
- What you return in your function component is what gets rendered


## Rules of JSX
- When you have js inside markup you need to wrap the js inside {}
- Everything in JSX has to have a single parent
  - you can wrap elements in a single Fragment (<></>)
    - Fragments do not get rendered


## Attributes and Props
- passing attributes to components using props (stands for properties)
- attributes passed to a react component those appear as elements in the props object 

## Managing state
- useState 
  - allows to assign a special variable/variables that can survive a re-render
  - const [searchText, setSearchText] = useState("");
  - setSearchText("new text");
  



