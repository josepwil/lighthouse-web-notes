## Day 2 Lecture Notes - Immutable Update Patterns


## Topics
- Review of Components and State Management
- Immutable Update Patterns
  - Rationale
  - Approach
  - ES6 Syntax



## Immutable
- unchanging or cannot be changed
- easier to reason about, test, create
- side-effect free
- preserves the previous version of itself (old state and new state)

- all data in JS is mutable by default
- enforce immutability by copying something and editing it
- spread operator makes a "Shallow Copy" 
  - child objects/arrays are stored by reference so they are mutable
  - to fix this we also need to spread child elements
- we only need to spread things if we are going to change them

## Updating complex state
- spreading object in callback and updating one of the keys

## Takeaway
- js by default is mutable so it is up to us to enforce this unchanging state using spread
- Primatives copied by value not by reference