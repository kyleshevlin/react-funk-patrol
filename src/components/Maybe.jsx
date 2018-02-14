import React from 'react'
import { isNothing } from '../utils'

const Maybe = ({ children, nothing, of }) =>
  !isNothing(of) ? children : nothing ? nothing() : null

Maybe.defaultProps = {
  nothing: () => null
}

export default Maybe
