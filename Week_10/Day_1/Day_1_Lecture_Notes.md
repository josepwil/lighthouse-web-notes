## Day 1 Lecture Notes - Rails Review


## Topics
- Nested Resources in Rails
    - Review of RESTful resources
    - Affects on form_for
- Namespacing
- Rails UJS and using AJAX links with link_to ... remote: true
- Rails 5 and Rails 6, and the features they bring
- WebSockets in Rails (ActionCable)
- Strategies to deal with model bloat (a common problem with MVC / Rails)
- Rails in the wild (most popular gems, open source projects like Discourse, etc.)
- Rails' affect on other web frameworks (PHP, Python, .NET, etc.)
- Suggestions for using Rails for final projects

### What is rails?
- A framework 

### Express vs Rails
- js / ruby
- rails is opinionated
- convention over configuration
- no callbacks
- rails is implicit vs express is explicit
- Express: everything needed to be configured
- Rails: because of convention a lot of things are confgured for you (RAILS MAGIC)

### Starting with Rails
- Routes!

### Routes
- the beginning of the app
- config/routes.rb
- routes file contrains all the definitions of all the routes that your site has.
- it also auto generates rest-ful routes using resource/resources tag

### Controller
- is the logic of your route

### View
- What gets rendered on the page

### Model
- A model is a blueprint  of a table inside of your DB
- A model also has some predefined methods to access the database (Active Record)
- You don't have to write SQL but rather use those methods

### Migrations
- it tells you when you need to run your migrations
- when running your migrations a schema.rb file gets auto-generated DO NOT EVER ALTER/TOUCH schema.rb
- change and manipulations
- rollbacks

### Rolling back vs making a new migration

#### Rolling back
- If you are on a branch, you can rollback and alter your migrations
BUT
- THE SECOND IT FOES INTO MASTER.. YOU CAN NEVER TOUCH IT AGAIN ( HISTORY )

#### Making A New Migration
- this is to preserve the old history of all of our DB tables/alters

-----------------
if not sure ALWAYS make a new migration...


