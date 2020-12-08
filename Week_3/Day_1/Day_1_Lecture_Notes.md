## Day 1 Lecture Notes - Web Servers 101

### Topics
- Intro to Web Servers (Express-less demo)
- Intro to Express
- What is "middleware?"
- Custom Middleware
- Intro to Server-side view templates with EJS


### 3 Pillars of Web Dev
- Week 3 - Back End / Server-side
- Week 4 - Client-side 
- Week 5 - Database

Client ==> Server (a server can also make a request to another server)


### Web Servers
- Server is something that listens for requests and responds with some kind of content
- Web Servers listen for HTTP requests 
- HTTP utilizes the TCP connection (but is not a persitent connection)
- HTTP is a Request/Reponse connection

### Ports
- Ports are like apartment numbers, domain says where does our server live, but the port specifies the apartment at that address 
- 65,535 ports available for every internet connection
- Some default ports: 3000 development, 80 HTTP, 443 HTTPS, 5432 Postgres
- Within vagrant we are limited to a very small number of ports before some ports have been forwarded from the host machine

### Request
- A unique combination of a verb and a path
- Verb describes what we want to do
- Path describes the resource we are interested in
- Verbs: GET and POST 
- Path/url: e.g. /products or /search etc.

### Response
- Status code: 200, 404, 500
- Optionally respond with content: HTML, video, data from a database etc.


<b>Request/Reponse cycle needs to complete or our browser hangs waiting on response from server</b>


### Vanilla JS way to create a server
- Using HTTP package from Node (from wkend work)
``` Javascript
const http = require('http');
const port = 3456;
// request arg shows us details of the request, response arg how we can formulate a response to the request
const server = http.createServer((request, response) => {
  // can get the route info from the request object and use this to handle each request (could  use if/else or switch statment);
  const route = `${request.method} ${request.url}`;
// Gets called everytime a request comes into our server
  response.write('Happy Monday');
  response.end() // sends back the reponse / completes the request reponse cycle
});
// starts up the server (can also pass a callback which fires when the server starts up)
server.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
```
### NPM
- dev dependency - only been used during development i.e. mocha/chai
- other dependency - we need for our project to run properly
- we don't need to specify --save for other dependency we do need to specify -dev for dev dependencies 

### Express way to create a server
- Using express node package
``` javascript
const express = require('express');
const port = 5678;

// creates server
const server = express()

// middleware - exists between the request and the response
server.use((request, response, next) => {
  console.log(`request came in! ${request.method} ${request.url}`);
  // whenever we're finished with our middlware we call next which moves on to the next middleware in the queue
  next();
});

// route handlers
// GET /
server.get('/', (request, response) => {
  // callback  called whenever above line is true
  response.send('You have reached the home page');
  // send back a html file using sendFile to send static files (not dynamically changing) - we need to use the complete path, can get that using console.log(__dirname); which gives our absolute path from root of os to current file
  response.sendFile('/index.html');
})
// GET /about
server.get('/about', (request, response) => {
  // callback  called whenever above line is true
  response.send('You have reached the about page');
})


server.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
})
```

### Middleware
- Middleware refers to code that sits between processes
- Express middleware sits between the request and the response
- middleware === functions
- Where the power of express comes from
- Very common to use other peoples middlware 
  - there is a list on express's website of popular middleware which are npm packages you can require into your program
  - majority of the middleware we bring in will be a higher order function
  - morgan, recommends we use this in every express app we create, it is a request logger


### Intro to Server-side view templates with EJS
- Embedded JS 
- Embedding our JS inside an HTML template
- EJS is a templating engine
- you do not need to require ejs at the top of your file but you do need to install it as a dependency, in order to use it you need to set it like below
``` javascript
// how to establish it in your file
server.set('view engine', 'ejs');
// how to use it
const templateVars = {
  username: 'Alice',
  faveFoods: ['apples', 'bananas', 'cauliflower']
};
server.get('/', (req, res) => {
  // can pass values dynamically through the object
  response.render('home-page', templateVars)
})
```
- need to store templates or views inside a views folder name ends in ejs (will create html file)
- inside our html fil we need to wrap out js inside <%= %>
- if we don't want something to ouput to the document we can omit the '='
``` javascript
<% for (const food of faveFoods) { %>
    <h3><%= food %></h3>
<% } %>
```









