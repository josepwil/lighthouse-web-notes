## Day 2 Lecture Notes - Advanced React

## Topics
- React Router
- Advanced Routing
- Styled Components
- `useContext`
- `useRef`
- Component Libraries


## React Router
- used to manage state in production
- BrowserRouter - component that holds all of the other things inside of it (tend to alias it as Router when we bring it in)
- Link - wherever we want to link to we put in between, like an anchor tag, pass in an attribute (to="") of where we want to go
- Route - receives a path and if the path evaulutes to true whatever is inside will be rendered
- Switch - wrap all of our Routes inside the switch component, but put the most specific route at the top and least specific at the bottom

## Advanced Routing
- useParams - custom hook, inside of any child component we can call useParams and it will give us the parameters from the URL
- We can nest Routers inside one another

## Styled Components
- equivalent of inline styles
``` javascript
import styled from 'styled-components'

const Header = styled.p`
  color: purple;
  font-size: 24px;
`
```

## useContext
- React/Redux => external state storage
- useContext for the most part is replacing redux, it elimnates prop drilling
- .Provider 

## useRef

## Component Libraries
- ant design
- material ui