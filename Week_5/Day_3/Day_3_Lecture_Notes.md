## Day 1 Lecture Notes - SQL from our Apps


## Topics
- Create a database
- Peform `BREAD` actions on database via command line app
- Demostrate an SQL injection attack
- Serve database content to the browser
- Protecting secrets with Environment Variables
- Reading and writing application data using SQL
- Async execution of queries (using pg library with promises)
- Sanitization of user input (how and why)

- Using node-postgres (pg) to interact with db using js


## SQL injection attack
- Whenever you get data from a user, do not trust it
- client.query takes two arguemnts, query string and array
- is Postgres we can use $1 as a place holder in our query and then add the user inputted values to an array, the place holder is the index of the array (in postgres index starts at 1)
- using template literals from user input is a bad idea because it opens you up to SQL Injection Attacks
- Most packages you use have their own way to sanitize user input e.g. postgres has the one above, react, vue, jquery etc. all have their own



##  Serve database content to the browser
- split up responsbility into different files: 
  - connection file, connect to db
  - express router
  - db folder qith queries

##  Protecting secrets with Environment Variables
- do not push your secrets (api keys etc, database connection strings) to git hub
- you can protect them using Environment Variables
- process.env
- dotenv package can help do this
