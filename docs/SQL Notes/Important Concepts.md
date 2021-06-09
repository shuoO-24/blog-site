---
id: sqlconcepts
title: Central Concepts
position: 1
---
## Relational Databases:

### Relational Database Management System

- __A database whose data is stored in tables__

- Incorporates multiple tables with methods for the tables to work together 
  - vs. something like a flat file database that is just one large table
- Advantage: **reduce data redundancy**

---

### What is a Relational Database

- It can be read and interpreted at a true account of a situation

- You can look at it and tell a real world thing that actually happened

  - Ex: an employee’s ID, their name, and location they work at 
    - I can say John Smith number AA123 works at store location number 555.

---

### What is a Relational Model

- The relational model is a data model
  - **Data Model**:
    - used to represent data and relationships between data items
    - specified the ways the data can be used
- Consists of 3 parts:
  - **Structural**: the building blocks from with the databases are constructed
  - **Integrity**: a collection of rules that all relational databases bust obey
  - **Manipulative**: operations for retrieving data and updating the database (all other chapters)

---

## Structural 

### Relation

- The actual table (aka relation) 
- **Order** of rows or columns does not matter - **No** **identical** rows (tuples) allowed 
- Each table (relation) in a relational database has a **unique** **name**

### Attribute

- The column names (i.e. heading) 
  - Thus the heading of each table is a set of attributes 
- Attribute values: the actual observations within the table

### Domain

- The original **set of atomic values** used to model the data 
- All the possible values that an attribute could take on (i.e. the levels of the variable)
  - Ex: Region could be the domain for Location `<East, West, Central, South,…>`
  - Ex: PSTAT Course ID is domain associated with course # `<5A, 10, 109, 122,…>`
  

### Tuple (tooples)

- The rows of the table 
- The header row does not count as a tuple

### Keys

- Consist of one or more attributes (variables) that determine the other attributes 
- Are used to establish and identify relationships between tables 
- Place certain constrains on a database

#### Super Key

- A set of one or more attributes (variables) that **uniquely** identify a row in a table.
  - The attribute values we would need to know to be able to pull out an exact row from the table.

- Ex: you have a table that has the attributes: Student ID, Name, Course# 
  -  Yes: `{Student ID, Name, Course #}` 
     - ➢ Yes, because we cannot have duplicate rows, so those knowing all three of those values would tell us exactly what each attribute is. Thus we could identify the exact row.
  - Yes: `{Student ID, Course #}` 
    - ➢ Yes, knowing the ID and Course# they are in would allow us to go and find what their name is, and pull out the exact row of data 
  - No: `{Student ID, Name}` 
    - ➢ No, knowing the Student ID and First Name tells us nothing about what Course they could be taking. They could have multiple rows under their ID and name for multiple different courses.
  - No: `{Student ID}` 
    - ➢ No, because only knowing the ID wouldn’t help us determine the Course# of that row because they could have multiple rows. Thus, we could not identify the exact row of data.

#### Candidate Key 

- Are selected from the set of **super** keys so there are **no redundant** attributes 
  - *Redundant Attributes*: an attribute that is not necessary to be able to uniquely identify the row of data.
  - i.e. knowing the value of one attribute would allow us to know the value of another attribute, making that second attribute redundant 
- Take the fewest (smallest) combinatioon from the Super Keys 
  - ➢ From Ex above: Student ID tells us everything (and more) that Name tells us, so the Candidate key is just `{Student ID, Course #}`

#### Primary Key 

- A set of one or MORE attributes that uniquely identifies any row in the table
- Each table has only **ONE primary key** 
- Chosen from the list of Candidate Keys, and has as few attributes as possible 
- The primary key has to be unique to its table (two tables can’t have same primary key)
  - You cannot have repeat primary keys within one relational dataset 
    - ➢ This is a product of the fact that RDMS reduces data redundancy 
- How to identify:
  - It must have **not null** values 
  - The value (or values if there are 2+) must be unique for each row of data 
    - ➢ i.e. knowing the primary key tells us exactly what row to look at

#### Foreign Key 

- An attribute in one table that matches the primary key of a different table in the database 
  - i.e. an attribute that provides a link between data in two tables 
- <div class="alert alert--primary" role="alert"> A table's primary key and foreign key CANNOT be the same.
    </div>
  - Because primary keys are unique and a foreign key matches another tables primary key

---

## Integrity

### Overview

- A set of rules that all relational databases must obey 
- Required to ensure that the database is consistent and complete 
- 2 general rules: **entity and referential integrity rule**

### Entity Integrity Rule:

- Entity integrity requires:
  - **Primary** key for each table (relation) is **unique** 
  - The primary key has all unique values and **no null** values 
- This rule is important to ensure there are **no duplicate rows** in one table

### Referential Integrity Rule:

- All **foreign** key values must be null (i.e. no foreign key) or correspond to a **primary** key value of other relation
- This ensures that we don’t try to cross reference to non-existent rows
  
### Designing a Relational Database

- Define the purpose of the database 
- Gather Data (or invent data) and organize relations 
- Define a schema for each relation 
- Choose primary keys and other keys
- Create the database
- Populate the database

### Relation Schema

- Each table (relation) has its own relation schema, which consists of the names of its attributes 
- **Structure**: list all attributes and underline the primary key(s) 
  - `Table_Name (Primary.Key, attribute1, … attribute n)`

### Database Schema

- Consists of all the relation shcemas for a given database 
- New relations can be added to a database at any time but must conform to constraints (integrity rules) 
- Enables us to work theoretically

---

