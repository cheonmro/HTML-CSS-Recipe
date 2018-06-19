# text-shadow

The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations.

```
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black; 

/* color | offset-x | offset-y | blur-radius */
text-shadow: #FC0 1px 0 10px; 

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558ABB;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

color(optional)
- The color of the shadow. It can be specified either before or after the offset values. If unspecified, the color's value is left up to the user agent(browser), so when consistency across browsers is desired you should define it explicitly.

offset-x, offset-y(required)
- offset-x: horizontal distance
  - negative value: places the shadow to the left of the text
- offset-y: vertical distance
  - negative value: places the shadow above the text
- If both values are 0, the shadow is placed directly behind the text, although it may be partly visible due to the effect of blur-radius.

blur-radius(optional)
- The higher the value, the bigger the blur; the shadow becomes wider and lighter. If not specified, it defaults to 0.