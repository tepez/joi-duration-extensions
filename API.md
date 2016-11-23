<!-- version -->
# 1.0.0 API Reference
<!-- versionstop -->

<!-- toc -->

- [Rules](#rules)
  - [`number.msDuration()`](#numbermsduration)

<!-- tocstop -->

# Rules

## `number.msDuration()`

Converts a string describing a duration in the [ms](https://github.com/zeit/ms) syntax to milliseconds.
No options are allowed.

```js
const schema = Joi.number().msDuration();
```
