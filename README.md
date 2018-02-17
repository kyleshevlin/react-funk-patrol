# React Funk Patrol

Components based on functional programming types.

[![Build Status](https://travis-ci.org/kyleshevlin/react-funk-patrol.svg?branch=master)](https://travis-ci.org/kyleshevlin/react-funk-patrol)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/kyleshevlin/react-funk-patrol/branch/master/graph/badge.svg)](https://codecov.io/gh/kyleshevlin/react-funk-patrol)

## Types

### Maybe

The `Maybe` component takes a value and renders `children` if that value is something other than `null` or `undefined`.

| Prop | Type | Purpose | Required? |
|---|---|---|---|
| `of` | any | `of` is given to an `isNothing` function to determine if it's either `null` or `undefined` | ✅ |
| `nothing` | function | This is rendered when `of` is either `null` or `undefined` | |

#### Example

```jsx
<Maybe
  of={something}
  nothing={() => <p>I render if `something` is actually nothing</p>}
>
  <p>
    I will render so long as `something` is not `null` or `undefined`
  </p>
</Maybe>
```

### Either

The `<Either>` takes a value and renders either the `left` render prop or the `right` render prop based on whether it's truthy or falsy. *Beware*, this utilizes Boolean coercion, so `0` will result in the `left` being rendered.

| Prop | Type | Purpose | Required? |
|---|---|---|---|
| `of` | any | `of` is coerced into a Boolean to determine whether `left` (false) or `right` (true) is rendered | ✅ |
| `left` | Component | rendered when `of` is falsy | |
| `right` | Component | rendered when `of` is truthy | |

#### Example

```jsx
<Either
  of={something}
  left={() => <p>'Left'</p>}
  right={() => <p>'Right'</p>}
/>
```
