import React from 'react'

const Either = ({ left, of, right }) => (of ? right() : left())

Either.defaultProps = {
  left: () => null,
  right: () => null
}

export default Either
