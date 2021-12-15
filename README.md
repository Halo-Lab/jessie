# Compiler in Sass

This is a fun project for adding special syntax into Sass to define various dimensions based on the _unit_ value.

## Description

The _unit_ is responsive value that express a width of a column in a grid with **64** (default) columns. That grid have **100vw** width.

Firstly, you should call the `init` mixin that will define the global `unit` value. It has one parameter that changes the columns count.

```scss
@include init();
```

The syntax is simple:

- there is a `dimensions` block that can be a count of the units or range in format `from <number>|start to <number>|end`.

- former is followed by a `borders` block that can have a minimum (unitless) and a maximun value (unitless) in pixels: `min <number> to <number>`.

Definition of the dimension must be written inside `compile` function.

```scss
body {
	width: compile(8);
	// or
	width: compile(from 1 to 8);
	// or if you want to add some constraints
	width: compile(from 1 to 8 min 40 max 120);
}
```

## Testing

There is _test_ directory that has bare minimum page with styles.

You can run `npm test` to run development server. Edit `index.scss` to test compilation of the custom syntax.

## Word from author

Have fun ✌️
