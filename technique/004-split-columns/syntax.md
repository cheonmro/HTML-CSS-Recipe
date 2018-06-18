# Split the text into Columns

column-count breaks an element's content into the specified number of columns.

```
<!-- Keyword value -->
column-count: auto;
column-width: 100px;
```

auto: 
- The number of columns is determined by other CSS properties, such as column-width.
- So, there will be the number of columns that each column's width is 100px.

```
<!-- <integer> value -->
column-count: 3;
```

It splits the text into 3 columns.


```
<!-- Global values -->
column-count: inherit;
column-count: initial;
column-count: unset;
```