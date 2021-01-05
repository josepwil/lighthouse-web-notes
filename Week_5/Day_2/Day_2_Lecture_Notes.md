## Day 2 Lecture Notes - Database Design



## Topics
- Introduction to creating ERDs
- Data modeling example (using ERDs)
- Important principles when architecting data
- Many-to-many relationships
- Normalized database design (why and how)

### Primary Keys
- A way of uniquely identifying a record
- Has to be unique within the table and cannot be null
- It can be any data type
- Prefer using auto-incrementing integers
- The foreign key has to be the same data type

### Naming Conventions
- All table and field names lower case and `snake_case`
- Table names are always plural
- That the PK will always be `id`
- FK will be singular of the PK table name plus `_id`
- `user_id`, `map_id`

### Data Types
- This used to be a huge concern 
- When a record is created, even if the field is null the db sets aside storage space in memory
- Data is now comparably cheap
- Try not to store images in tables (AWS, imgur and then storet he url)
- Postal Codes and Phone numbers stored as strings

### Relationship Types
- One-to-many/Many-to-one: one record in the 1st table is related to 1 or more records in the 2nd (most common)
- One-to-one: one record in the 1st table is related to only 1 record in the 2nd (very very rare)
- Many-to-many: 1 or more records in the 1st table are related to 1 or more records in the 2nd (news a third table to be implemented)


### Design Concepts
- Required fields: think of the records in its initial state
- Default values: timestamp/created_at `DEFAULT NOW()`, `active` default true
- Calculated Fields: a field whose values can be derived from one or more other fields, e.g. `first_name`, `last_name`, `full_name` good practice to build `full_name` on the client side in js in case for example someone gets married and their last name changes
- Single source of truth
- Repeating values: pull repeating values out to a lookup table
  - can use a lookup table to power a dropdown list on client side
- Try not to delete anything: use an `active` field instead
- Consider using a `type` field to differentiate between records with similar values

### ERD
- Entity Relationship Diagram
- Very very useful for querying and adding new tables

