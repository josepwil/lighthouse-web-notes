## Day 3 Lecture Notes - Data Fetching & Other Side Effects

## Topics
- Side Effects
  - types of side-effects
- useEffect
  - Dependency array
  - Cleanup
- Selectors

## React Review

### State?
- Data stored inside a component
- Immutable (should be)
- It can be set (changed over time)
- Persistant 
- Triggers a re-render
- the remembered information about a system + useState & Reacts conventions for trackinh state
- A new value of state is created everytime the component runs and renders.
- Each prop and state is a for a particular functional component execution, and they remain the same throughout that render

### What are pure functions?
- Produces the same output everytime given the same input
- Given A, B it will always produce C
- No side effects e.g. (changing global scope)

## What are side effects?
- if output is not consistent there must be a side effect
- Unintended consequences? (sometimes)


### Any function that is not pure has side effects
- Depends on external data (outside its local environment/scope)
- Has an observable effect besides returning a value (often main effect)
- Side effects can depend on the history of the application (what happens before or after the function is run)
- Can be hard to debug

## Types of side-effects
- Setting timeers or intervals
- Modifying the DOM elements not controlled by React
- A network request
- Connection to a socket server
- Adding and removing event listeners
- Logging to the console

## useEffect
- takes in 2 parameters
- the first is a callback behaviour to run (a function with a side effect)
- the second is an array, it is an array of dependencies, if they change the behaviour should re-run
  - if the dependency array is empty it means run once on the first render

  ``` javascript
  useEffect(() => {
    document.title = 'hello world app';
  }, [])

  ```
- generally not triggered by user actions

## Stale state
- reference to an old snapshot of state and using that to make our updates 
- what we created is stuck in time when we first created it, has access to that state

## Functional set state
- passing a call back to setState gets the current version of state
- we still have stale state but our setSate function gets the latest snapshot of state
- if you're doing anything inside of useEffect you should usually default to using functional set state

## Clean up
- remove the effects of the previous effect before calling the effect again
- you can do that in useEffect by returning a clean up function
- the function will be run between calls of use effect or on an unmount
- you want to create a cleanup everytime there is persistant/lasting effcts of your useEffect
- if you hide a component you should also clean up

## useEffect and ajax requests (with axios)
- most common way you will see useEffect used
- with data fetching
- no need to clean up

