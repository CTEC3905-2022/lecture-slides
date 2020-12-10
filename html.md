# CTEC3905
## Front-end web development

<div class="flex-center">
	<img src="images/html.svg" alt="html logo">
	<img src="images/css.svg" alt="css logo">
	<img src="images/js.svg" alt="js logo">
</div>

### Introduction to HTML

<p class="flex-center">
	Dr Graeme Stuart
</p>

<span class="reference">
	adapted from <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">MDN</a>
</span>
-----

## **H**yper**T**ext **M**arkup **L**anguage

Hypertext is a non-linear form of distributed document.
Hypertext documents include embedded links to other hypertext documents.

<div class="flex-center">
	<img src="images/hypertext.svg" alt="Hypertext documents">
</div>

The web of connected documents may come from multiple servers across many domain names.
This is what makes the **world wide web** a *web*.

-----

## HTML is used to format documents on the web

A web server (the **back-end**) *serves* HTML documents via **HyperText Transfer Protocol (HTTP)**.
Documents can be stored on the server as files or programmatically constructed from templates and data.

<div class="flex-center">
	<img src="images/client-server.svg" alt="HTML files travel from server to client">
</div>

A web client (the **front-end**, usually a web browser) requests documents and related resources.
The server responds to requests by returning the document content.

The document is then loaded into the web browsers **Document Object Model** and presented to the user.
The browser applies any **style** information provided before rendering the document and handles any **javascript** code included with the document.

-----

## HyperText Markup Language

Markup refers to the *marking up* of text (e.g. in a manuscript) to indicate how it should be treated when printed.

```html
<h2>HyperText Markup Language</h2>
<p>
	Markup refers to the <em>marking up</em> of text (e.g. in a manuscript)
	to indicate how it should be treated when printed.
</p>
```

The above paragraph is *marked up* to indicate how it should be treated.
The first line is a level 2 heading.
The rest of the text should be combined into one paragraph with emphasis added to a few of the words.

This does not include any information about how to add emphasis or how to format headings or paragraphs.
-----

## HTML5 is the current version


<figure>
	<figcaption>HTML5 logo</figcaption>
	<img src="images/html.svg" alt="html logo" class="short">
</figure>


Though many features are similar to previous versions, HTML5 introduced improvements and simplifications which mean you don't need to worry about lots of things we used to worry about.

It also introduced *semantic tags* (they **do** what they **say**) e.g. `main`, `header`, `footer`, `section`, `article`, `aside`, `nav`, `figure`, `figcaption`...

```
<div id="header"></div>  <!-- this -->
<header></header>        <!-- became this -->
```

In this module, we are *only* dealing with HTML5 and we expect **you** to use modern approaches.

-----

## HTML documents

*ALL* HTML5 documents require a `<!DOCTYPE html>` and an `<html>` element at the top level.
The `<html>` element should contain only a `<head>` element and a `<body>` element.
Within the `<head>` element there should be a `<title>` element and `<meta>` element defining the character set.

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My amazing webpage</title>
	</head>

	<body>

		<!-- your (well structured) document content goes here -->

	</body>

</html>
```
<figure>
	<figcaption>A minimal HTML document</figcaption>
</figure>


-----


## Anatomy of an HTML element

- Elements consist of content between matching pairs of tags.
- Tags must include a tag name and are surrounded by angle brackets.
- Closing tags include a forward slash before the tag name.

```html
<p>It's easy, really.</p>
```
<figure>
	<figcaption>Yep, easy</figcaption>
</figure>

<figure>
	<img src="images/grumpy-cat-small.png" alt="diagram of an HTML element">
	<figcaption>HTML elements consist of content between tags</figcaption>
</figure>

-----

## Elements can have attributes

Elements can have **attributes** to add information that should not be considered content.
Attributes are key/value pairs separated by an equals symbol.

<figure>
	<img src="images/grumpy-cat-attribute-small.png" alt="diagram of an HTML element with attribute">
	<figcaption>Attributes are placed inside the opening tag, after the tag name.</figcaption>
</figure>

### Common mistakes


```html
<p attribute="this-is-wrong"attribute2="this-is-wrong">
	Missing space between attributes
</p>
<p attribute1=value3>
	Missing quotes
</p>
```
<figure>
	<figcaption>Pay attention to the details</figcaption>
</figure>
-----

## Some elements don't need closing tags

For most elements, a missing closing tag is invalid and can cause very unusual problems with rendering your document.
__Void__ elements such as
`<br>`, `<img>` and `<input>`
are not allowed to contain content.
These elements do not require closing tags.


```html
<!-- line breaks are very simple -->
<br>

<!-- images require 'src' and 'alt' attributes -->
<img src="path/to/image" alt="alternative text">

<!-- inputs have many optional attributes to control their operation -->
<input type="text" value="default">

```
<figure>
	<figcaption>Common void elements with no closing tag</figcaption>
</figure>



```html
<head>
	<link rel="stylesheet" href="path/to/styles.css">
	<meta charset="utf-8">
</head>
```
<figure>
	<figcaption>The link and meta elements are also void</figcaption>
</figure>
-----

## Nesting

The content of elements can contain nested elements.
Nesting is essential and expected.

Be **very careful** when nesting elements.


```html
<p>My cat is <strong>very grumpy.</p></strong>
```
<figure>
	<figcaption>No! Never do this!</figcaption>
</figure>

```html
<p>
My cat is
<strong>
very grumpy.
</p>
</strong>
```
<figure>
	<figcaption>Watch out for this!</figcaption>
</figure>

```html
<p>
	My cat is <strong>very grumpy</strong>.
</p>
```
<figure>
	<figcaption>Better!</figcaption>
</figure>
-----


## Some important elements

Paragraphs are essential for structuring text.
By default they have a margin top and bottom.
This separates them from each other and from other content.

```html
<p>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	Excepteur sint occaecat cupidatat non proident,
	sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```
<div class="default">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>

-----

## Some important elements

Headings come in six levels from `<h1>` to `<h6>`, there should usually only be one `<h1></h1>` element in a document.
For most circumstances, six levels is too much.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>

-----

## Some important elements

Lists come in two main forms.
Unordered lists (`<ul>`) generate bullet points by default.
Ordered lists (`<ol>`) generate numbered lists by default.
Lists are collections of list items (`<li>`) which contain the actual content.

```html
<ul>
	<li>Unordered one</li>
	<li>Unordered two</li>
</ul>
<ol>
	<li>Ordered one</li>
	<li>Ordered two</li>
</ol>
```

<div class="default">
	<ul>
		<li>Unordered one</li>
		<li>Unordered two</li>
	</ul>
	<ol>
		<li>Ordered one</li>
		<li>Ordered two</li>
	</ol>
</div>

-----

## Some important elements

Anchors or hyperlinks are what makes the web a web.
Each `<a>` element requires an `href` (hypertext reference) attribute which specifies the link destination.

```html

<!-- We can link to anywhere on the web -->
<a href="https://github.com/CTEC3905-2020-21">Go to another website</a>


<!-- or another page in the same site -->
<a href="another-page.html">Go to another page</a>


<!-- or scroll to a location in the current page -->
<a href="#my-section">Jump to an ID on the same page</a>


<!-- here's the location with an id attribute -->
<section id="my-section">
  <p>A paragraph inside the section</p>
</section>
```


-----

## Some important elements

Images can be inserted using `<img>` elements.
These cannot contain content and require no end tag.

Images **must** include a `src` attribute specifying the path to the source image file.
Images **must** also include an `alt` (alternative text) attribute to specify text to show if the image cannot be loaded/presented.

```HTML
<img src="images/html.svg" alt="html5 logo">
<img src="images/css.svg" alt="css3 logo">
<img src="images/js.svg" alt="js logo">
<img src="images/missing.svg" alt="missing logo">
```

<div class="flex">
	<img src="images/html.svg" alt="html5 logo">
	<img src="images/css.svg" alt="css3 logo">
	<img src="images/js.svg" alt="js logo">
	<img src="images/missing.svg" alt="missing logo">
</div>

-----

## Some important elements

You can add **HTML comments** in your code:

```html
<!-- The figure tag is for image/captions boxes -->

<figure>
  <!-- The img tag goes here -->
  <!-- The figcaption tag goes here -->
</figure>
```
Text between `<!--` and `-->` won’t show on screen.

-----

## Related content

These slides can be found on [the CTEC3905 github repository]()

- [Introduction to CSS]
- [Introduction to Javascript]
- [Introduction to workflow]

-----

## Codecademy has the following free courses:

- [Learn HTML](https://www.codecademy.com/learn/learn-html)
- [Learn CSS](https://www.codecademy.com/learn/learn-css)
- [Learn how to build websites](https://www.codecademy.com/learn/paths/learn-how-to-build-websites)
- [Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

-----

## Introduction to HTML

<div class="center hero">

	<div class="flex-center">
		<img src="images/html.svg" alt="html logo">
		<img src="images/css.svg" alt="css logo">
		<img src="images/js.svg" alt="js logo">
	</div>

	<p>Share your questions in lab sessions.</p>
	<h3>Dr Graeme Stuart</h3>
	<h4>gstuart@dmu.ac.uk</h4>
</div>
