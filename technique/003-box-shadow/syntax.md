# box-shadow

box-shadow is used to add shadow effects aournd an element's frame.

<br>

```
<!-- offset-x | offset-y | color -->
box-shadow: 60px -16px teal;
```

offset-x: first value(60px)
- It specifies the horizontal distance.
- Plus values: the shadow will be on the right of the box.
- Negative values: the shadow will be on the left of the box.

offset-y: second value(-16px)
- It specifies the vertical distance.
- Plus values: the shadow will be below the box.
- Negative values: the shadow will be above the box.

color: optional
- If not specified, the color used depends on the browser.

<br>

```
<!-- offset-x | offset-y | blur-radius | color -->
box-shadow: 10px 5px 5px black;
```

blur-radius: third value(5px)
- The larger this value, the bigger the blur, so the shadow becomes bigger and lighter.
- Negative values are not allowed.
- If not specified, it will be 0(the shadow's edge is sharp).


<br>

```
<!-- offset-x | offset-y | blur-radius | spread-radius | color -->
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```

spread-radius: fourth value(1px)
- Positive values will cause the shadow to expand and grow bigger.
- Negative values will cause the shadow to shrink.
- If not specified, it will be 0(the shadow will be the same size as the element).

<br>

```
<!-- inset | offset-x | offset-y | color -->
box-shadow: inset 5em 1em gold;
```

inset: first value before offset-x, optional
- If not specified(default), the shadow is assumed to be a drop shadow(as if the box were raised above content).
- The inset keyword changes the shadow to one inside the frame(as if the content was depressed inside the box).
- The inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

<br>

```
<!-- Any number of shadows, separated by commas -->
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

<br>

```
<!-- Global keywords -->
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```