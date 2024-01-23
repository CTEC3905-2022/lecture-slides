# CTEC3905
## Front-end web development

<div class="flex-center intro">
	<img src="images/html.svg" alt="html logo">
	<img src="images/css.svg" alt="css logo">
	<img src="images/js.svg" alt="js logo">
</div>

### Introduction to CSS
#### Cascading Style Sheets
<p class="flex-center">
	Dr Graeme Stuart
</p>

<span class="reference">
	adapted from <a href="???">MDN</a>
</span>
-----

## CSS handles presentation

<div class="flex j-center a-start">
	<img src="images/wireframe.png" alt="a website design wireframe">
	<ul class="expendable">
		<li>colour</li>
		<li>font</li>
		<li>borders</li>
		<li>padding</li>
		<li>margin</li>
		<li>size</li>
		<li>layout</li>
		<li>position</li>
		<li>transitions</li>
		<li>animations</li>
	</ul>
</div>

Stylesheets give you the ability to choose where elements are placed within your page and how those elements appear.

-----

## Linking stylesheets

A single stylesheet can be used across multiple pages.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>My page</title>
		<!-- All styling information is in the linked file -->
		<!-- So swapping out a stylesheet is easy -->
		<link rel="stylesheet" href="css/styles.css">
	</head>
	<body>
		<!-- content goes here -->
		<!-- keep style information out of the content -->
	</body>
</html>
```

Spend some time in the [CSS Zen Garden](http://www.csszengarden.com/) for inspiration.

-----

## CSS syntax

A CSS *ruleset* consists of a [group of] *selector*[s]
and a *declaration block* (between curly brackets) containing one or more *declarations*.

```css
/* comment format */
selector {
	property: value1;
	another-property: value2;
}
```
<figure><figcaption>Generic CSS syntax</figcaption></figure>

One-line formatting is also common, with property/value pairs importantly separated by semi-colons.
This should **only be used when there is only one declaration**.

```css
selector { property: value1; another-property: value2; }
```
<figure><figcaption>One-line formatting with multiple declarations is hard to read</figcaption></figure>

-----

## Some examples

CSS declarations are a way to set CSS properties of elements to given values.
The **selector** determines which elements are targetted by the ruleset.

```css
/* remove default margin from the body element */
body {
	margin: 0;
}

/* style all paragraphs with green text */
p {
	color: green;
}

/* add underline to all links and make them blue */
a {
	text-decoration: underline;
	color: blue;
}
```

-----

## Some more examples

CSS declarations can have multiple values.
This will depend on the property being set.
Multiple values are typically separated by spaces but some properties require comma-separated values.

```css
body {
	margin: 0 auto;
	font-family: Tahoma, Helvetica, sans-serif;
}

p {
	border: 3px solid blue;
}

div.fancy {
	background-image: url(../images/fancy-image.png);
}

```

-----

## Selectors

```css

/* default styles for anchors within paragraphs */
p a { color: skyblue; }

/* fresh/fruity containers have green/pink links */
.fresh a { color: #4b6; }
.fruity a { color: #d6d; }

/* specific links can be snazzy */
a.snazzy {
	background-color: #000;
	border-radius: 1em;
	padding: 0 0.25em;
	text-decoration: none;
}
a.snazzy:hover { filter: brightness(2.5); }

```
<figure><figcaption>Decendent combinator and pseudo-classes</figcaption></figure>

See the [w3schools CSS selector reference](https://www.w3schools.com/cssref/css_selectors.asp) and the [MDN pseudo-classes reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) for more details.
-----

## Usage

<div class="small"></div>

<div class="selector-example">
	<p>
		With default styles, <a href="#">links are blue</a>.
		<a class="snazzy" href="#">Snazzy links</a> are also blue.
	</p>
	<p class="fresh">
		With fresh styles, <a href="#">links are green</a>.
		<a class="snazzy" href="#">Snazzy links</a> are also green.
	</p>
	<p class="fruity">
		With fruity styles, <a href="#">links are pink</a>.
		<a class="snazzy" href="#">Snazzy links</a> are also pink.
	</p>
</div>
```html
<p>
	With default styles, <a href="#">links are blue</a>.
	<a class="snazzy" href="#">Snazzy links</a> are also blue.
</p>
<p class="fresh">
	With fresh styles, <a href="#">links are green</a>.
	<a class="snazzy" href="#">Snazzy links</a> are also green.
</p>
<p class="fruity">
	With fruity styles, <a href="#">links are pink</a>.
	<a class="snazzy" href="#">Snazzy links</a> are also pink.
</p>
```
-----

## Class and ID selectors

In your CSS file, use `class` selectors for selecting *elements of a particular type*.
Use `id` selectors for selecting a specific *individual element*.

```css
.student {
	width: 5em;
	height: 6.5em;
	border: 5px solid #666;
	background-color: #333;
	color: #eee;
}
#P12345678 {
	border-color: red;
}
```

In your HTML file, add `class` or `id` attributes to make specific elements selectable.

Remember, you cannot use the same ID on more than one element.
Classes can be used to identify elements that should be given similar styles.

-----

## The result

<div class="student-example">

	<figure class="student" id="P12345678">
		<img src="images/P12345678.png">
		<figcaption>P12345678</figcaption>
	</figure>

	<figure class="student" id="P12345679">
		<img src="images/P12345679.png">
		<figcaption>P12345679</figcaption>
	</figure>

</div>

```html
<figure class="student" id="P12345678">
	<img src="students/p12345678.png">
	<figcaption>P12345678</figcaption>
</figure>

<figure class="student" id="P12345679">
	<img src="students/p12345679.png">
	<figcaption>P12345679</figcaption>
</figure>
```


-----


## Box model

The box model applies to all elements but applies differently to *inline* and *block* level elements. Its easier to consider the way it applies to *block* level elements.

<div id="box">
<div class="margin">margin
	<div class="border">border
		<div class="padding">padding
			<div class="content">content</div>
		</div>
	</div>
</div>
<div class="margin">margin
	<div class="border">border
		<div class="padding">padding
			<div class="content">more content</div>
		</div>
	</div>
</div>
<button id="boxToggle">Toggle view mode</button>
</div>

**Content** is surrounded by **padding** before the box **border**, then elements are separated by **margin**.

Checkout this [interactive demo](http://guyroutledge.github.io/box-model/)
-----
## Box model: padding

```css
div {
	background-color: yellow;
	padding: 2em;
}
```
<div id="padding-demo">padding</div>
<figure><figcaption>padding gives content space within an element</figcaption></figure>
-----

## Box model: border

```css
div {
	background-color: yellow;
	padding: 2em;
	border: 5px dashed red;
}
```
<div id="border-demo">border</div>
<figure><figcaption>borders appear at the edge of the padding</figcaption></figure>

-----

## Box model: border

The **border** property is a shortcut for a collection of properties.

```css

div {
	/* properties can be set individually for fine control */
	border-width: 5px;
	border-style: solid;
	border-color: green;

	/* or just use the shortcut to do the same thing */
	border: 5px solid green;
}
```

-----

## Box model: border-radius


The **border-radius** property adds rounded corners...

```css
div {
	background-color: yellow;
	padding: 2em;
	border: 5px dashed red;
	border-radius: 1em;
}
```
<div id="border-radius-demo">border-radius</div>
<figure><figcaption>rounded corners</figcaption></figure>

-----

## Box model: border-radius

...and can even make an element into a circle

<div id="border-radius-img-demo">
	<img src="images/close_up_design.jpg"  alt="round image">
</div>
<figure><figcaption>round images!</figcaption></figure>

```css
img {
	height: 200px;
	width: 200px;
	border-radius: 50%;
	border: 4px solid black;
}
```

-----

## Box model: margin

```css
div {
	background-color: yellow;
	padding: 2em;
	border: 5px dashed red;
	border-radius: 3em;
	margin: 2em;
}
```
<div id="margin-demo">margin</div>
<figure><figcaption>margin puts space between elements</figcaption></figure>

-----
## Box model

The **margin**, **padding** and **border-width** properties are very similar.
They can be set to one, two, three or four space-separated values.

```css
div {
	/* one value applies to all sides */
	margin: 1em;

	/* two values applies to top/bottom and left/right */
	padding: 0.5em 1em;

	/* three values applies to top, left/right and bottom */
	border-width: 5px 1px 2px;

	/* four values applies to top, right, bottom, left */
	padding: 0.5em 1em 0 2em;
}

```

Typically, its good practice to only use *pixels*, *ems* or *percentages* for these properties.
-----


## Box model

For **border**, **padding** and **margin**, the four sides can be set individually using `-top`, `-bottom`, `-left` and `-right`.

```css
div {
	margin: 1em;
	padding: 1em;
	border: 1px solid blue;

	/* override the left margin */
	margin-left: 3.5em;

	/* override the top padding */
	padding-top: 0;

	/* change the colour of the top border */
	border-top-color: red;

	/* change the style of the right border */
	border-right-style: dashed;
}

```

-----

## Specificity

Usually, in cases where properties are set in multiple places, later instances will overwrite previous values.
However, be careful because more *specific* selectors will have precedence.

```CSS
p.specific { color: yellow; }
p { color: red; }
p { color: blue; }
```

with HTML

```html
<p>This will be blue</p>
<p class="specific">This will be yellow</p>
```

There are new ways to declare cascade layers (using [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)) in order of precedence.
-----

## The `display` property

The `display` property controls how an element behaves in the page.
By default, elements typically have the display property set to `block` or `inline`.
There are also `inline-block` elements.

Elements with display set to `block` will take the full width of their parent.

```html
<p style="background: yellow">A paragraph is a good example.</p>
```
<p style="background: yellow">A paragraph is a good example.</p>

Elements with display set to `inline` will flow nicely within text.

```html
<p>An <em style="background: yellow">emphasis</em> element is a good example.</p>
```
<p>An <em style="background: yellow">emphasis</em> element is a good example.</p>



-----

## Block elements

Block elements (such as `<div>`s) will arrange themselves vertically and will take up the full width of their container.

```html
<div></div>
<h1></h1><h2></h2><h3></h3><h4></h4><h5></h5><h6></h6>
<p></p>
<ul></ul>
<ol></ol>
<li></li>
<html></html>
<body></body>
<header></header>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
<nav></nav>
```
<figure><figcaption>Some common block elements (there are many more)</figcaption></figure>

-----

## Inline elements

Inline elements (such as `<span>`s) will arrange themselves like text within a paragraph, wrapping as needed.
Inline elements take the width of their content.

```html
<span></span>
<a></a>
<button></button>
<label></label>
<input>
<small></small>
<em></em>
<strong></strong>
<code></code>
```
<figure><figcaption>Some common inline elements (there are many more)</figcaption></figure>

-----

## Normal flow: block elements

```css
div {
	font-size: 12pt;
	margin: 15px;
	padding: 15px;
	border: 1px solid red;
	background-color: #ddd;
}
```
<figure><figcaption>style some divs</figcaption></figure>

<figure>
	<div class="flow-example">
		<div>This is a div</div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
		<div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
	</div>
	<figcaption>Block element flow</figcaption>
</figure>

-----

## Normal flow: inline elements

```css
span {
	font-size: 12pt;
	margin: 15px;
	padding: 15px;
	border: 1px solid red;
	background-color: #ccc;
}
```
<figure><figcaption>set their background colour</figcaption></figure>

<figure>
	<div class="flow-example">
		<span>This is a span</span>
		<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
		<span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
	</div>
	<figcaption>inline element flow</figcaption>
</figure>

-----

## Normal flow: mixing element types

Mixing block and Inline elements is normal and good but...

```html
<div>A div <span>with a span inside</span> is fine.</div>
<span>A span<div>with a div inside</div> is <em>not OK</em>.</span>
```
<figure><figcaption>Don't put block elements within inline elements</figcaption></figure>

<div class="flow-example">
	<div>
		A div <span>with a span inside</span> is fine.
	</div>
	<span>
		A span<div>with a div inside</div> is <em>not OK</em>.
	</span>
</div>

Its very important to understand which elements are *inline* and which are *block*.
-----


## What about images?

Images have a default display property of *inline-block*.
This is the same as *block* except they don't force the next element to a new line.
So images can be positioned horizontally.
<span id="inline-block-demo">
	<img src="images/html.svg" alt="HTML5 logo">
	<img src="images/css.svg" alt="CSS3 logo">
	<img src="images/js.svg" alt="JS logo">
</span>
```html
<img src="images/html.svg" alt="HTML5 logo">
<img src="images/css.svg" alt="CSS3 logo">
<img src="images/js.svg" alt="JS logo">
```
<figure><figcaption>just images</figcaption></figure>

```css
img {
	max-width: 1em;
	max-height: 1em;
	padding: 0.2em;
	background-color: hsl(150, 50%, 50%);
	border: 1px solid #bbb;
	border-radius: 5px;
}
```
<figure><figcaption>give them a width and they line up horizontally, and they obey the box model</figcaption></figure>


-----

## `Position: relative`

We have seen that elements have a position in the flow.
The `position` property determines how an element behaves relative to this.
The default value of the `position` property is `static`.

If we set an element to `position: relative` then it can be re-positioned, relative to its normal position in the flow.

<style>
	.demo p {
		background-color: hsl(100, 50%, 80%);
		border: 2px solid black;
	}
	.p-relative {
		position: relative;
		background-color: hsl(0, 50%, 80%);
	}
	.demo span {
		background-color: hsl(0, 50%, 80%);
	}
	span.p-relative {
		top: 10px;
	}
	p.p-relative {
		left: 2em;
		top: -0.5em;
		background-color: hsl(0, 50%, 80%);
	}
</style>

<div class="demo">
	<p>
		Inside a paragraph, we can add a <span> plain span</span> and style it to be visible.
	</p>
	<p>
		For example <span class="p-relative">this span</span> has <code>top: 10px;</code>, so is ten pixels lower than its natural position.
	</p>
	<p class="p-relative">Similarly, this entire paragraph is <code>position: relative</code> and has <code>top: -0.5em; left: 2em;</code></p>
</div>

```css
.p-relative {
	position: relative;
	background-color: hsl(0, 50%, 80%);
}
```

-----

## `position: absolute`

Setting the `position` property to `absolute` takes elements out of the *flow* layout.

<style>
	div.nice {
		display: flex; 
		justify-content: space-around;
	}
	div.nice > div {
		background: hsl(100, 50%, 80%);
	}
	div.nice div div {
		background: hsla(200, 50%, 50%, 0.8);
		border: 1px solid black; 
		height: 100px;
	}
</style>

<div class="nice">

<div>
	<div style="width: 200px;">Element 1</div>
	<div style="width: 180px;">Element 2</div>
	<div style="width: 160px;">Element 3</div>
</div>

<div>
	<div style="width: 200px;">Element 1</div>
	<div style="width: 180px; position: absolute;">Element 2</div>
	<div style="width: 160px;">Element 3</div>
</div>

</div>

Absolutely positioned elements stay in their original position but take no space in the flow.

```html
<div>
	<div style="width: 200px;">Element 1</div>
	<div style="width: 180px; position: absolute;">Element 2</div>
	<div style="width: 160px;">Element 3</div>
</div>

```

-----

## `position: absolute`

Using `top`, `left`, `bottom` and `right` we can locate our element *within* the nearest parent element which is `position: relative` or `position: absolute`.

<style>
	div.nice2 {
		display: flex; 
		justify-content: space-around;
	}
	div.nice2 > div {
		background: hsl(100, 50%, 80%);
		width: 30%;
		height: 240px;
		position: relative;
	}
	div.nice2 > div > div {
		background: hsla(200, 50%, 50%, 0.8);
		border: 1px solid black; 
	}
	div.nice2 > div:nth-child(2) > div {
		position: absolute;
	}
</style>

<div class="nice2">

<div>
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<small>The parent must have a size</small>
</div>

<div>
	<div>1</div>
	<div style="right: 0;">2</div>
	<div style="bottom: 0;">3</div>
	<div style="right: 0; bottom: 0;">4</div>
	<small style="position: absolute; top: 3em; left: 2em">It should also be<br> <code>position: relative</code><br> to contain it's children.</small>
</div>

</div>

Without this, our elements would be positioned relative to the `<html>` element.

```html
<div style="position: relative;">
	<div style="position: absolute;">1</div>
	<div style="position: absolute; right: 0;">2</div>
	<div style="position: absolute; bottom: 0;">3</div>
	<div style="position: absolute; right: 0; bottom: 0;">4</div>
</div>

```

-----


## `display: flex`

The *flexible box* module allows for smooth and responsive control of layout in one dimension.

```html
<div class="flex">
	<div>Element 1</div>
	<div>Element 2</div>
	<div>Element 3</div>
</div>
```
<figure><figcaption>Use flex on a container element</figcaption></figure>

```css
.flex {
	display: flex;
}
```

<figure>
	<div class="flex-demo flex">
		<div>Element 1</div>
		<div>Element 2</div>
		<div>Element 3</div>
	</div>
	<figcaption>Set the display property to flex</figcaption>
</figure>

-----

## `justify-content`

The `justify-content` property controls how the space is used.
It defaults to `flex-start`;

```css
.flex {
	display: flex;
	justify-content: flex-end;
}
```
<figure>
	<div class="flex-demo flex j-end">
		<div>Element 1</div>
		<div>Element 2</div>
		<div>Element 3</div>
	</div>
	<figcaption>justify-content: flex-end</figcaption>
</figure>

```css
.flex {
	display: flex;
	justify-content: center;
}
```
<figure>
	<div class="flex-demo flex j-center">
		<div>Element 1</div>
		<div>Element 2</div>
		<div>Element 3</div>
	</div>
	<figcaption>justify-content: center</figcaption>
</figure>

-----

## `justify-content`

The `space-around` and `space-between` options are very powerful.

```css
.flex {
	display: flex;
	justify-content: space-around;
}
```
<div class="flex-demo flex j-around">
	<div>Element 1</div>
	<div>Element 2</div>
	<div>Element 3</div>
</div>
<figure><figcaption>justify-content: space-around</figcaption></figure>

```css
.flex {
	display: flex;
	justify-content: space-between;
}
```
<div class="flex-demo flex j-between">
	<div>Element 1</div>
	<div>Element 2</div>
	<div>Element 3</div>
</div>
<figure><figcaption>justify-content: space-between</figcaption></figure>

-----

## `flex-direction`

The `flex-direction` property can be used to change the direction of the layout.

```css
.flex {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 10em;
}
```
<div class="flex-demo flex d-column j-between">
	<div>Element 1</div>
	<div>Element 2</div>
	<div>Element 3</div>
</div>
<figure><figcaption>flex-direction: column</figcaption></figure>

-----

## flex-box is important

Try the game [flexbox defense](http://www.flexboxdefense.com/) to learn all the ins and outs of it.

<figure>
	<img src="images/flexbox-defense.png" alt="flexbox defense screenshot">
	<figcaption>https://flexboxdefense.com</figcaption>
</figure>
-----


## `display: grid`

Grid layouts are extremely powerful.
Grid allows you to locate child elements very precisely within a layout.
Grid can be used for *intrinsic* layouts, 

```css
.grid-demo1 {
	display: grid;
	grid-template-columns: auto auto;
}
```

Grid items take their implicit positions on the grid automatically.

<div class="grid grid-demo1">
	<div>Element 1</div>
	<div>Element 2<br>Is a bit taller</div>
	<div>Element 3 is a bit wider</div>
</div>
<figure><figcaption>grid-template-columns</figcaption></figure>

-----

## Grid `gap`

Gaps can be added to flex and grid layouts.

```css
.grid-demo2 {
	display: grid;
	grid-template-columns: auto auto;
	gap: 0.5em;
}
```

All grid cells will now be separated.

<div class="grid grid-demo1" style="gap: 0.5em">
	<div>Element 2<br>Is a bit taller</div>
	<div>Element 3 is a bit wider</div>
	<div>Element 1</div>
</div>
<figure><figcaption>grid-template-columns</figcaption></figure>

-----

## A simple layout with grid

<div style="display: flex; justify-content: space-between; align-items: flex-start;">

<p style="max-width: 550px; margin: 0;">
	Grid is perfect for page layouts.
	We can decide specifically which areas of the grid should be taken up with which element.
	We can also even <em>overlap</em> elements.
</p>

<div class="grid grid-demo3">
	<div>Header</div>
	<div>
		<p>This is the main content</p>
	</div>
	<div>
		<p>This is a sidebar</p>
	</div>
	<div>Footer</div>
</div>
</div>

Here we have done it with  `grid-template-areas`.
There are many approaches.

```css
.grid-demo3 {
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 1fr auto;
	grid-template-areas: 
	"header header"
	"main aside"
	"footer footer";
}
.grid-demo3 header {
	grid-area: header;
}
```

-----

## Grid is also important

Try the game [CSS grid garden](https://cssgridgarden.com/) to learn some of the basics.

<figure>
	<img src="images/css-grid-garden.png" alt="CSS grid garden screenshot">
	<figcaption>https://cssgridgarden.com/</figcaption>
</figure>

Watch the [layout land](https://www.youtube.com/c/layoutland) youTube series for more details on grid.


-----

## Summary

<div class="larger"></div>

- CSS *declarations* are simple property/value pairs, grouped into *rulesets*
- *Rulesets* are applied using *selectors*
- The *display* property determines how HTML elements are laid out
- *Inline* elements flow and wrap like text
- *Block* elements take the full width of their container and force a new line
- *Flex* and *grid* elements control the layout of their children

-----

## Further information

<div class="larger"></div>


Some additional information and references

- Check compatibility [in MDN](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) and [caniuse](https://caniuse.com/)
- Be inspired in the [CSS Zen Garden](http://www.csszengarden.com/)
- Try this [interactive box model demo](http://guyroutledge.github.io/box-model/)
- Play [flexbox defense](http://www.flexboxdefense.com/) to learn flexbox
- [CSS default values](https://www.w3schools.com/cssref/css_default_values.asp) from w3schools
- [CSS selector reference](https://www.w3schools.com/cssref/css_selectors.asp) from w3schools
- [pseudo-classes reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) from MDN
- [Layout land](https://www.youtube.com/c/layoutland) is great for learning the basics of grid layouts
- Also on youTube, [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw) is good for CSS.


-----

<div class="center hero">
	<h3>Cascading Style Sheets</h3>
	<div class="flex-center intro">
		<img src="images/html.svg" alt="html logo">
		<img src="images/css.svg" alt="css logo">
		<img src="images/js.svg" alt="js logo">
	</div>

	<p>Share your questions in lab sessions.</p>
	<h3>Dr Graeme Stuart</h3>
	<h4>gstuart@dmu.ac.uk</h4>
</div>
