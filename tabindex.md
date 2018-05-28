# tabindex

"tabindex" is attribute for keyboard focus.

It indicates if its element can be focused, and if/where it participates in sequential keyboard navigation(usually with the "Tab" key).

It accepts an integer as a value, with different results depending on the integer's value

<br>

## tabindex = "0"

It means that the element should be focusable in sequential keyboard navigation, but its order is defined by the document's source order.

```
<li class="menu-item" tabindex="0"></li>
```

<br>

## tabindex = "-1"(negative value)

It is ignored during tapping.
It means that the element should be focusable, but should not be reachable via sequential keyboard navigation.

```
<li class="menu-item" tabindex="-1"></li>
```

<br>

## tabindex = "positive value"

It means that the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number.

For example, tabindex="4" would be focused before tabindex="5", but after tabindex="3". 

If multiple elements share the same positive tabindex value, their order relative to each other follows their position in the document source.

It is not recommended to give positive values to your elements, you will end up jumping between them, and it is going to be confused to manipulate between your Element's tabindex attribute values. Instead, focus on writing them in a suitable DOM sequence.

```
<li class="menu-item" tabindex="1"></li>
```