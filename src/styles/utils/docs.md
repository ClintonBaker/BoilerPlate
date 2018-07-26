# Stylus Utils Documentation

## Variables

## Mixins

In Stylus, like Sass and every other CSS superset, we have mixins. In every other superset,
mixins require an abstraction from CSS syntax, but with Stylus we have "transparent" mixins.

Transparent mixins look just like css property/value pairs, but we can use them to apply
dynamic styling.

The available mixins are documented below.

- `layout`

```
// input
.component {
	// <row | row-reverse | column | column-reverse>
	layout: row;
}
```

```
// output
.component {
	display: flex;
	flex-direction: row;
}
```

- `content-x`
_Requires flex-direction to be set previously, either with `layout` or with `flex-direction`._

```
// input
.component {
	layout: column;
	// <center | flex-start | flex-end | space-between | space-around>;
	content-x: center;
}
```

```
// output
.component {
	display: flex;
	flex-direction: column;
	align-items: center;
}
```

- `content-y`
_Requires flex-direction to be set previously, either with `layout` or with `flex-direction`._

```
// input
.component {
	layout: column;
	content-x: center;
	// <center | flex-start | flex-end | space-between | space-around>;
	content-y: center;
}
```

```
// output
.component {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
```