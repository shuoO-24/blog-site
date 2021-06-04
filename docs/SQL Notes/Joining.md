---
id: sqljoin
title: SQL Joining
---

# SQL Joining


The attributes in the same domain in the joined tables do not need to have same names.

- **INNER JOIN**：如果表中有至少一个匹配，则返回行
- **LEFT JOIN**：即使右表中没有匹配，也从左表返回所有的行
- **RIGHT JOIN**：即使左表中没有匹配，也从右表返回所有的行
- **FULL JOIN**：只要其中一个表中存在匹配，则返回行
- `SELF JOIN`：用于将表连接到自己，就好像该表是两个表一样，临时重命名了SQL语句中的至少一个表 
- `CARTESIAN JOIN` or `CROSS JOIN`：从两个或多个连接表返回记录集的笛卡儿积 

<div style={{ zoom: 0.87 }} class='text--center'>
<img src="https://i0.wp.com/www.globalsqa.com/wp-content/uploads/2020/05/sql_reddit.jpg?w=940&ssl=1" alt="SQL joins"/>
</div>

## JOIN and INNER JOIN

On the basis of the column which is **explicitly specified** in the `ON` clause. The resulting table will contain **all** the attributes from both the tables including **common**/duplicated columns. INNER JOIN 与 JOIN 是相同的。

**`INNER JOIN` or `JOIN` return the same result**. `JOIN` is more useful when we specified conditions.([Difference between Natural join and Inner Join in SQL](https://www.geeksforgeeks.org/difference-between-natural-join-and-inner-join-in-sql/))

```sql
SELECT <attributes> 
FROM R INNER NOIN S
WHERE <attribute in R> = <attribute in S>
```

The following diagram illustrates the `INNER JOIN` clause:

<div style={{ zoom: 0.67 }} class='text--center'>
<img src="https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-inner-join-venn-diagram.png" alt="SQLite inner join venn diagram"/>
</div>



```sql
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((
    Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) 
    INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```

This logic is applied if you join more than 2 tables.


<div style={{ zoom: 0.67 }} class='text--center'>
<img src="https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-Inner-Join-Example.png" alt="SQLite inner join venn diagram"/>
</div>

## NATURAL JOIN

It creates an implicit join clause based on the **common columns** in the two tables being joined. It is based on **same attribute name and datatypes**. The resulting table will contain all the attributes of both the table but keep only **one copy of each common column**.(no `NO` nor `HAVING` conditions can be specified)

> If there are some tuples having different values of common attributes, these tuples will be discarded after joining together.

A NATURAL JOIN can be an INNER join, a LEFT OUTER join, or a RIGHT OUTER join. The default is INNER join.

SQLite automatically finds the attributes to merge on.

```sql
SELECT * FROM R NATURAL JOIN S
```

If the SELECT statement in which the NATURAL JOIN operation appears has an asterisk (*) in the select list, the asterisk will be expanded to the following list of columns (in this order):

- All the common columns
- Every column in the first (left) table that is not a common column
- Every column in the second (right) table that is not a common column

An asterisk qualified by a table name (for example, COUNTRIES.*) will be expanded to every column of that table that is not a common column.





## LEFT JOIN

Combines two relations on specific attributes.

```sql
SELECT * FROM R LEFT JOIN S ON R.A = S.A
```
```sql
SELECT a, b
FROM A
LEFT JOIN B ON A.f = B.f
WHERE search_condition
```

The statement returns a result set that includes:

1. Rows in table A (left table) that have corresponding rows in table B.
2. Rows in the table A table and the rows in the table B filled with `NULL` values in case the row from table A does not have any corresponding rows in table B.(can have different names)

In other words, **all rows in table A are included in the result set whether there are matching rows in table B or not**.

In case you have a `WHERE` clause in the statement, the `search_condition` in the `WHERE` clause is applied after the matching of the `LEFT JOIN` clause completes.

See the following illustration of the `LEFT JOIN` clause between the A and B tables.

<div style={{ zoom: 0.67 }} class='text--center'>
<img src='https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-left-join-example.png' alt='left join'/>
</div>

The following Venn Diagram illustrates the `LEFT JOIN` clause.

<div style={{ zoom: 0.67 }} class='text--center'><img src='https://www.sqlitetutorial.net/wp-content/uploads/2015/12/SQLite-Left-Join-Venn-Diagram.png' alt='left join'/>
</div>

It is noted that `LEFT OUTER JOIN` is the same as `LEFT JOIN`

## Examples:

1. Retrieve the product names and product colors that have been ordered by ALEX or CAROL:
    ```r
    # CUSTOMER -> CUST_NO -> SALES_ORDER -> ORDER_NO -> SALES_ORDER_LINE -> PROD_NO -> PRODUCT -> NAME, COLOR
    dbGetQuery(mydb, 'SELECT PRODUCT.NAME, PRODUCT.COLOR 
            FROM CUSTOMER JOIN PRODUCT, SALES_ORDER, SALES_ORDER_LINE 
            WHERE CUSTOMER.NAME IN("ALEX", "CAROL") 
            AND CUSTOMER.CUST_NO = SALES_ORDER.CUST_NO
            AND SALES_ORDER_LINE.ORDER_NO = SALES_ORDER.ORDER_NO
            AND SALES_ORDER_LINE.PROD_NO = PRODUCT.PROD_NO')

    NAME COLOR
    1 PANTS  BLUE
    2 PANTS  BLUE
    3 SOCKS WHITE
    ```
2. 

---