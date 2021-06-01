---
sidebar_position: 1

---


# SQL

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !


SQL，指**结构化查询语言**，全称是 Structured Query Language。

SQL 是用于访问和处理数据库的标准的计算机语言。

MySQL是一个关系型数据库管理系统，MySQL可以使用SQL语言来访问数据库。

SQL 可以：

- 创建新的数据库、表、存储过程和视图。
- 在数据库中插入、更新、删除记录。
- 从数据库中检索数据等。

虽然 SQL 是一门 ANSI（美国国家标准化组织）标准的计算机语言，但是仍然存在着多种不同版本的 SQL 语言。

除了SQL标准之外，大多数SQL数据库程序都有自己的专有扩展，但它们都支持主要命令。




### SQL约束

　约束是在表上的数据列上强制执行的规则。它们用于限制可以进入表中的数据类型。这确保了数据库中数据的准确性和可靠性。约束可以是列级别，也可以是表级别。列级约束仅应用于一列，而表级约束则应用于整个表。

　以下是sql−中可用的一些最常用的约束

- [NOT NULL 约束](https://www.w3cschool.cn/sql/6tlpzfpb.html)：保证列中数据不能有 NULL 值
- [DEFAULT 约束](https://www.w3cschool.cn/sql/jm8e9fpj.html)：提供该列数据未指定时所采用的默认值
- [UNIQUE 约束](https://www.w3cschool.cn/sql/wxzqsfpc.html)：保证列中的所有数据各不相同
- [主键约束](https://www.w3cschool.cn/sql/vle8zfpd.html)：唯一标识数据表中的行/记录
- [外键约束](https://www.w3cschool.cn/sql/5dycsfpf.html)：唯一标识其他表中的一条行/记录
- [CHECK 约束](https://www.w3cschool.cn/sql/fsq7hfph.html)：此约束保证列中的所有值满足某一条件
- [索引](https://www.w3cschool.cn/sql/cuj91oz2.html)：用于在数据库中快速创建或检索数据

　约束可以在创建表时规定（通过 CREATE TABLE 语句），或者在表创建之后规定（通过 ALTER TABLE 语句）。

---

## Concepts: Database

A collection of data that is logically coherent.

An organised, machine-readable collection of symbols, to be interpreted as a true account of some enterprise.

**Machine-updatable**, so a database is also a collection of variable.

They are very important, we use them all the time.

**Example:** (look at your e-grades, sign up for courses) Web indexes, library, catalogues, medical records, bank accounts, stock control, personnel systems, product catalogues, telephone directories, train timetables, airline bookings, credit card details, student records, customer, histories, stock market prices, discussion boards, and so on...

## Database Management System(DBMS)

A piece of software for managing databases and providing access to them.

A DBMS responds to instructions given by application programs, executing on behalf of users.

These instructions are written in the **database language** of the DBMS. For us , this will be **SQL**(most popular, with Python, R as top three languages in data science).

Responses include results of queries and a lot of others(obtaining, deleting from the database, and so on)



### Relational Database

A relational database stores and manages structured data.

A database of structured data organised into a collection of relations. — At this moment we only concern with **structured data**.

*Relational databases provide an environment from which data can be accessed or reassembled in a variety of different ways without needing to reorganize the database tables. Each table has a **unique** **identifier**, or **primary** **key**, which identifies the information in the table, and each row contains a unique instance of data for the categories defined by the columns.*

*The logical connection between different tables can then be established with the use of **foreign** **keys** - a field in a table that connects to the primary key data of another table.*

### Relational Database Management System(RDBMS)

**Structured data**, such as bank statements and electronic address books, is stored in a **relational database**.

In order to manage all this structured data a **relational database management system (RDBMS)** is used to create, maintain, access and manipulate the data.

- A collection of files that store the data
- A big C program written by someone else that accesses and updates those files for you

A DBMS needs not to be relational, and we only concern with RDBMS.

- Database Management System = DBMS; Relational DBMS = RDBMS

### SQLite

SQLite is relational database management system itself which uses SQL.

SQLite is portable database resource. It could get an extension in whatever programming language used to access that database.

SQLite supports many features of SQL and has high performance but does not support stored procedures.

SQLite is file-based. It is different from other SQL databases because unlike most other SQL databases, SQLite does not have separate server process.

---

## Relational Model

- First published by E. F. Codd at IBM labs in San Jose, CA.
- Series of research papers 1970 – 1974.
- Still the leading model for databases
- **The relational model is a theoretical model of relational databases.**
- Based on **set theory, it is mathematically sound.** (PSTAT 132: theoretical foundations)
- The relational model is the **most widely used data model for commercial data-processing**. The reason it’s used so much is because it’s simple and easy to maintain.

The relational model is data model.

A **data model** is used to represent data and the relationships between data items. It specifies the ways in which the data can be used.

### 3 Parts of Relational Model

1. **Structural:** the building blocks from which relational databases are constructed.
2. **Integrity**: a collection of rules that all relational databases must obey in order to be consistent and complete.
3. **Manipulative**: includes operations for retrieving data, for updating the relational database. <— SQL

### Structural Part of Relational Model

1. **Relation**
2. **Attribute**
3. **Domain**
4. **Tuple**
5. **Keys**:
   1. **Super Key**
   2. **Primary Key**
   3. **Candidate Key**
   4. **Foreign Key**



