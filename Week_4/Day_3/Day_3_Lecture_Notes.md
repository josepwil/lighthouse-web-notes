## Day 1 Lecture Notes - Intro to AJAX (Async JS and XML)


## Topics
- Browser & AJAX
- Why use AJAX
- Fallbacks
- AJAX Response
- CORS


### What is AJAX
- Can make requests from your client side javascript programmatically 
- Allows you to send and receive data from a server asynchronously 
- Practically this means you can change content dynamically without reloading the page
- AJAX requests can be done in vanilla js (and other libraries) but for our purposes we will use jquery

``` javascript
// * means all elements
* {
  box-sizing: border-box;
}
```

### Pros? 
- SPA's
- Performance?
  - Distribute the load of requests over the lifetime of that app rather than one big initial load 
- User does not get a noticeable page to reload

### Cons?
- Accessibility and dynamic content is tricky
- Async programming patterns are more complex to code
- it reques js and XMLHTTP Request support
- History is not automatically updated

### Fallbacks?
- Sometimes user disable js


### AJAX Response
- What can AJAX return?
  - JSON
  - XML
    - xhtml -> html
- AJAX response data doesn't have to be JSON in many apps it's rendered HTML
  - github projects


### CORS
- Cross Origin Resource Sharing
- For any website/web app you have an origin the server that served the initial web application (index.html)
- When you make a request to a different server it is a Cross Origin request


