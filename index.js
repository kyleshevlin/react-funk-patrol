// Maybe :: value -> Nothing Just
const isNothing = val => val === null || val === undefined
const Nothing = () => null
const Just = ({ children }) => children

export const Maybe = ({ children, value }) => {
  const match = isNothing(value) ? Nothing : Just

  return React.Children.toArray(children).filter(child => child.type === match)
}

// Either :: condition -> Left Right
const Left = ({ children }) => children
const Right = ({ children }) => children

export const Either = ({ children, condition }) => {
  const match = condition ? Right : Left

  return React.Children.toArray(children).filter(child => child.type === match)
}
