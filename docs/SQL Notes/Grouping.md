---
id: sqlgroup
title: SQL Grouping
---
## Grouping

The `GROUP BY` clause comes after the `FROM` clause of the `SELECT` statement. In case a statement contains a `WHERE` clause, the `GROUP BY` clause must come after the `WHERE` clause.

```sql
SELECT 
    column_1,
    aggregate_function(column_2) 
FROM table
(WHERE ......)
GROUP BY 
    column_1,
    column_2;
HAVING conditions
```

Following the `GROUP BY` clause is a column or a list of comma-separated columns used to specify the group. [^3]

如果两个primary key values指向同一非primary key值，grouping之后重复的非primary key值只会出现一次：
<div style={{ zoom: 0.67 }} class='text--center'>
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gqzi3ci7loj30gs08e74y.jpg" alt="EMPLOYEE_PHONE"/>
</div>

`GROUP BY OFFICE`之后：
<div style={{ zoom: 0.67 }} class='text--center'>
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gqzi4z4sz7j30be0580t1.jpg" alt="grouped"/>
</div>

<br />

---
### **Example**:

<div style={{ zoom: 0.67 }} class='text--center'><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gqzc0w47pxj30n008i3zj.jpg" alt="INVOICES"/>
</div>

Which ORDERS are invoiced for a quantity of 20000 or more items?

```sql
dbGetQuery(mydb, 'SELECT ORDER_NO, SUM(QUANTITY) FROM INVOICES GROUP BY ORDER_NO HAVING SUM(QUANTITY) > 20000')
#    ORDER_NO SUM(QUANTITY)
# 1        1         20120
```

How many items are in each order?

```sql
dbGetQuery(mydb, 'SELECT ORDER_NO, SUM(QUANTITY) FROM INVOICES GROUP BY ORDER_NO')
#    ORDER_NO SUM(QUANTITY)
# 1        1         20120
# 2        2         11000
```

---

### 常与ordering一起使用

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```

#### **Example**:

```sql
SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;
```


