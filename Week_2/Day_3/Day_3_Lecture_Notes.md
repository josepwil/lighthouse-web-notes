## Week 2: Day 3 Networking with TCP and HTTP

### Topics
- What is networking? (Quick review)
- TCP introduction (and demo)
- HTTP Fundamentals
    - Its request & response nature
    - How it leverages TCP
    - Most important parts of a request
    - Common status codes such as 200, 302, 404, and 500
- Simple node HTTP Client example (using request)

### TCP
- Transmission Control Protocol
  - Used the establish networked communication between applications
  - Connection oriented 
    - connection has to be established between parties before info is sent (like a phone call, person needs to accept the call)
  - Congestion Control
  - Error Detection
  - Lost Data Handling
  - Adds port
    - you can choose your port when setting up a server (> 3000 is a good choice)
  - Prioritizes accuracy over speed
- UDP is an alternative to TCP (prioritizes speed over accuracy)
  - Can be used for things like video calls
- TCP Server / TCP Client

### Net
- net is a module that uses the TCP protocol



### HTTP
- Uses TCP for some of its communication and builds on top of it and adds for complexity to the protocol
- Request and response (something that is loaded in the browser)
- APIs one form of servers that you can make requests to
- Postman an app you can use to make HTTP requests
- Headers: specify additional data for the request

### HTTP Methods
- GET
  - retrieve data from the server
- POST
  - add data to the server (can pass data along with request)
- PUT
  - edit data on the server (can pass data along with request)
- DELETE
  - remove data from the server

### Item Potency

### Path
- The path identifies a resource that you want to take an action on


### Server Response
- responds with a status code (e.g. 404, 200)
- along with a bunch of headers
- then the body data

