## Day 4 Lecture Notes - Responsive Design and SASS

## Topics
- Responsive Design

- Intro [10 min]
- what is "responsive design"
- CSS Features that can help:
  - media-queries
  - percentages
  - ems
  - max-width, min-width
  - viewport
  - border-box
- More Flexbox (they learned about it on W4D1)
- Grid Systems
- DEMO [40 min]
- convert sample site to be responsive

- SASS / SCSS

  - Intro [10 min]
  - what is a preprocessor
  - SASS extra features:
    - variables
    - nesting
    - partials and import
    - mixins
    - extend
    - math
  - how to use Sass with a node project
  - DEMO [40 min]
  - convert CSS to SASS


### Why and how to responsive design
- visit websites on their phone
- multiple screens
- increased visibility on search engines (SEO)
- limited bandwith 
- accessibility 

### Patterns in responsive design 
- mobile first / desktop first - follows the intent of the app
- mostly fluid
- colummn drop
- layout shifter
- tiny tweaks
- off canvas



### DEMO 
- use padding to create white space
- Pixels not ideal when everything is responsive
- better to set a parent font-size for the parent in pixels and then use em for size of other elements and then use pixels again in the media query 
  - ems relative to parent font-size
  - rems relative to root font-size
- flex-wrap
  - width 100%

### Breakpoints
- 320 / 500 / 768 / 1024 / 144

### What Francis uses
- Viewport for layout/ Ems for everything else


### Sass
- Preprocessor 
- We can use variables
- SCSS a middle ground between Sass and CSS
  ``` css
   /* declare variable in Sass */
  $primary-color: red;
  nav {
    color: $primary-color;
  }
  ```
- We can also use nesting
- SCSS still uses curly braces, Sass removes all curly braces and won't work if they are included

### What makes Sass great?
- Nested CSS
- Variables
- Partials

