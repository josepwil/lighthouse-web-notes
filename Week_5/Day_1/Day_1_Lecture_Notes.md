## Day 1 Lecture Notes - SQL Intro


## Topics
- Introduction to RDBMS
- The Relational Data Model (Tables, Columns, Rows)
- SELECT Statements
    - Filtering, ordering, limiting, etc.
    - Joining tables
    - Grouping records
    - Aggregate functions
    - Other advanced examples
    - `LIMIT` and `OFFSET`

### RDBMS
- Relational Database Management System/Server
- A server that just hosts databases
- We don't communicate directly with the database itself but the server
- psql / ElephantSQL is a RDBMS, mongo is another
- Client <==TCP/HTTP==> Web Server <==TCP/POSTGRES==> RDBMS
  - postgres protocol

### Relational Databases
- Database is a collection of tables
- Tables are made up of rows and columns
- Column === Field (adjective)
- Rows === Records (single entity)
- Relational database all the tables are related to one or more other tables
- Foreign key/Primary key system (PK and FK)


### SQL SELECTS
- SQL is case insensitive, we capitalize the SQL code to make it easier to read
- and separate our clauses on a new line
- alias a select using AS 
- SELECT * is bad practice 
- SQL "" - table or field name
- SQl '' - when checking a string
- Chaining ORDER BY's: 
  ``` 
  ORDER BY age DESC, last_name; 
  ```
- NOW() - current data and time
- CURRENT_DATE;
- SELECT DISTINCT country
- LIMIT 10; returns the first 10
- Good for pagenation
  - OFFSET how many to skip
  - LIMIT 10 OFFSET amountPerPage * current_page_number - 1;


  ### Multiple tables - Joins
  - SELECT * <br>
    FROM albums <br>
    JOIN songs ON albums.id = album_id;
  - GROUP BY, groups like with like (conceptually how are the records being crushed down into a single entity)
  - HAVING (a WHERE for queries with a GROUP BY)
  - JOIN by default is an INNER JOIN
    - If we want to see all the albums that aren't matched to songs we can do a LEFT JOIN 
    - the type of JOIN matters, where you want to get information from
    - INNER JOIN (default) / LEFT JOIN / RIGHT JOIN / FULL OUTER JOIN

  - Generally we send the raw data from the database and that data is manipulated on the client side before showing to the user

### Comparing a table against itself
- Subquery 
``` SQL
SELECT album_name,
 artist_name, 
 song_name, 
 rating
 -- (SELECT AVG(rating) from songs WHERE albums.id = album_id) AS album_avg to visualize
FROM albums
JOIN songs ON ablums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) from songs WHERE albums.id = album_id);
```





