# background-position

The background-position property in CSS allows you to move a background image (or gradient) around within its container.

It has three different types of values:
- Keywords (e.g. top right)
  - top: 0% vertically
  - right: 100% horizontally
  - bottom: 100% vertically
  - left: 0% horizontally
  - 50% horizontally if horizontal isn't already defined. If it is then this is applied vertically.
- Length values (e.g. 100px 5px)
  - first value: horizontal position
  - second value: vertical position
  - ex) 100px 5px: move the image 100px to the right and 5px down
- Percentages (e.g. 100% 5%)

If not specify anything, the default values are 0 0. This places your background image at the top left of the container.

## Declaring Values

### If declare 1 value,

- value: horizontal offset
- The browser sets the vertical offset to center.

```
.oneValueByKeyword {
  background-position: bottom;
}

.oneValueByLength {
  background-position: 50px;
}

.oneValueByPercent {
  background-position: 50%;
}
```

### If declare 2 values,

- value: horizontal offset
- second value: vertical offset.

```
.twoValueByKeyword {
  background-position: right center;
}
.twoValueByLength {
  background-position: 50px 10px;
}
.twoValueByPercent {
  background-position: 50% 10%;
}
```

### If declare 3 values,

- the browser interpets the "missing" fourth value as 0. 

```
#threevalues {
  background-position: right 45px bottom;
}
```

This positions the background image 45px from the right and 0px from the bottom of the container.



### If declare 4 values,

```
#fourvalues {
  background-position: right 45px bottom 20px;
}
```

This puts the background image 45px from the right and 20px from the bottom of the container.


A three- or four-value syntax alternates between keywords and length or percentage units. You can use any of the keyword values except center in a three- or four-value background-position declaration.


## Multiple Images

- Move multiple images around separated by commas

```
.multipleImages {
  background-position: 10px 20px,
                       center;
}
```