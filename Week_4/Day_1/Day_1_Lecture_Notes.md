## Day 1 Lecture Notes - Intro to CSS


## Topics
- Writing semantic HTML
- reset / normalize
- Box sizing: border-box (non-default)
- CSS debugging in DevTools
- CSS Specificity
- Writing good CSS selectors (best practices)
    - What's too specific vs what's too generic?
- Intro to Flexbox
- When to use IDs vs Classes


## Box sizing: border-box (non-default)
- Pretty much every single HTML element exists within the box model - everything is a box
- By default you want to use Box sizing: border-box 

## Layout - floats (old way)
- Block level elements take up a whole line
- Block elements stack therefore by default
- float: left / float:right
- need to use <b>clearfix</b> when floating elements

## Flexbox 
- display: flex;
- flex-direction: row;
- justify-content: flex-start; (main axis)
- align-items: flex-start;  (cross-axis)
- flex-basis: 5em; (specify how much space a child element should take up)
- flex-grow: 2; proportion to other flex items for size
- difference between flex-basis and flex-grow: flex-grow takes up all of the remaining space flex basis can leave some space
- order: 1;
  - default is 0
  - can assign an order number to flex items to order them 
- align-self: flex-start; 
  - can align flex item using align -self on the cross axis

## Understanding the Cascade
- More specific selector also wins, CSS specificity

