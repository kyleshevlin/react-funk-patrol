const isNothing = value => value === null || value === undefined

export const Just = ({ children }) => children

export const Maybe = ({ children, value }) =>
  React.Children.map(
    children,
    child => (isNothing(value) && child.type === Just ? null : child)
  )

export const Left = ({ children }) => children
export const Right = ({ children }) => children

export const Either = ({ children, condition }) => {
  const typeToRemove = condition ? Left : Right

  return React.Children
    .toArray(children)
    .filter(child => child.type !== typeToRemove)
}
