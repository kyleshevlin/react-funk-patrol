# React Funk Patrol

Compound Components based on functional programming types.

## What are Compound Components?

Glad you asked. [Check out this video of a talk given by Ryan Florence.](https://www.youtube.com/watch?v=hEGg-3pIHlE)

## Types

### Maybe

`<Maybe>` takes a `value` prop. If that value is nothing, it will render any `<Just>`s as `null`. Otherwise, it will render the children of any `<Just>`. All other children are passed through.

#### Example

```jsx
<Maybe value={something}>
  <p>I will render regardless of the value.</p>
  <Just>
    <p>I will render conditionally.</p>
  </Just>
</Maybe>
```

### Either

`<Either>` takes a `condition` prop. If that prop is truthy, it will render all the children of any `<Right>` element. Otherwise, it will render all the children of any `<Left>` element. All other children are passed through.

#### Example

```jsx
<Either condition={something}>
  <p>I will render regardless of the condition</p>
  <Left>
    <p>The condition was falsy.</p>
  </Left>
  <Right>
    <p>The condition was truthy. Hooray!</p>
  </Right>
  <Left>
    <p>Look! When the condition is falsy, this renders, too!</p>
  </Left>
</Either>
```
