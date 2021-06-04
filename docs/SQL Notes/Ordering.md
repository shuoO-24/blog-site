---
sidebar_position: 4
id: sqlorder
title: SQL Ordering
---


# Ordering

## `ORDER BY` 

对结果进行升序排列，后面加上排序关键字

>  *ORDER BY 关键字默认按照升序（ASC）对记录进行排序。如果需要按照降序对记录进行排序，你可以使用 DESC 关键字。*

`ORDER BY` 关键字可用于对结果集按照多个列进行排序。将对多个列使用 `ORDER BY` 时，请使用逗号分隔列的列表以跟随 `ORDER BY`。

`ORDER BY` 命令按照与列相同的顺序开始排序。它将按列出的第一列排序，然后按第二列排序，依此类推。

Ordering is **ascending**, unless the keyword `DESC` is specified.

**Ties are broken by the second attribute** on the `ORDER BY` list.

The `WHERE` statement is optional.

```sql
SELECT attribute1, attribute2, … 
FROM relation1, relation2 
WHERE conditions 
GROUP BY attribute1, attribute2, … 
HAVING conditions
ORDER BY attribute1, attribute2, … [ASC | DESC]
```

Do not need to add `ASC` because it's default.

Striking through `GROUP BY` and `HAVING` — we do not need them for **ordering the results**.

Order by position of attribute name in the relation you're ordering or attribute name:

```r
dbGetQuery(mydb, 'SELECT * FROM PRODUCT ORDER BY 1 DESC')
dbGetQuery(mydb, 'SELECT * FROM PRODUCT ORDER BY PROD_NO DESC')
```

Order twice:

```r
dbGetQuery(mydb, 'SELECT AGE, DEPT_NO FROM EMPLOYEE ORDER BY 2 DESC, 1 DESC')
```



