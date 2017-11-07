# React Funk Patrol

This is a library of Compound Components based on Functional Programming types.

## What are Compound Components?

Glad you asked. [Check out this video of a talk given by Ryan Florence.](https://www.youtube.com/watch?v=hEGg-3pIHlE)

## Types

### Maybe

`<Maybe>` takes a `value` prop. If that prop is nothing, it will render your `<Nothing />`, Otherwise it will render any children of and `<Just>` element.

#### Example

```jsx
<Maybe value={something}>
  <Nothing />
  <Just>
    <p>I'd really like to something someday!</p>
  </Just>
</Maybe>
```

### Either

`<Either>` takes a `condition` prop. If that prop is truthy, it will render all the children of any `<Right>` element. Otherwise, it will render any children of any `<Left>` element.

#### Example

```jsx
<Either condition={something}>
  <Left>
    <p>The condition was falsy.</p>
  </Left>
  <Right>
    <p>The condition was truthy. Hooray!</p>
  </Right>
  <Left>
    <p>Look! When the condition is falsy, all the `<Left>`s render!</p>
  </Left>
</Maybe>
```
