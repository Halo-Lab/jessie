# Jessie

This is a fun project for adding special syntax into Sass to define various dimensions based on the _unit_ value.

## Description

The _unit_ is responsive value that express a width of a column in a grid with **64** (default) columns. That grid have **100vw** width.

Firstly, you should call the `init` mixin that will define the global `unit` value. It has four optional parameters (all with default values):

```
@mixin init(
	$grid-columns: 64,
	$grid-width: 100vw,
	$min-unit-value: 10px,
	$max-unit-value: 25px
) {
	// ...
}
```

That mixin should be invoked once **only** in global scope.

```scss
@use "jessie";

@include jessie.init();
```

The syntax is simple:

- there is a `dimensions` block that can be a count of the units or range in format `from <number>|start (inclusive) to <number>|end (exclusive)`.

> The resulting value includes start column but it does not include end column.

- former is followed by a `borders` block that can have either a minimum or a maximun value, or both with any CSS unit (_px_, _em_, _%_ and so on.): `[min <number>] [max <number>]`.

Definition of the dimension must be written inside a `value` function.

```scss
@use "jessie";

body {
	width: jessie.value(8);
	// or
	width: jessie.value(from 1 to 8);
	// or if you want to add some constraints
	width: jessie.value(from 1 to 8 min 40px max 120px);
}
```

## Word from author

Have fun ✌️
