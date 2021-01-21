## Day 4 Lecture Notes - Custom Hooks

## Topics
- Separate rendering from logic
- Create a custom Hook
- Test driven development in React

- Custom hooks let us move repititve or complex code out of our components 
- Custom hooks can and and often do, use other React hooks (useState, useEffecr, etc.)
- You can think of Custom hooks as 'helper functions' for React
- React rule: all React Hooks must start with the prefix 'use'
- Multiple instances of the same custom hook do not share state
- A custom hook can return anything you want (value, aray, object, function) 

- it is very important to not mutate your state
- side effects are just things that happen because of something else
- we use useEffect because we want to create a side effect
