import PropTypes from 'prop-types'
import { isNothing } from '../utils'

const Maybe = ({ children, nothing, of, something }) =>
  !isNothing(of) ? something({ children }) : nothing({ children })

Maybe.propTypes = {
  children: PropTypes.any,
  nothing: PropTypes.func,
  of: PropTypes.any,
  something: PropTypes.func
}

Maybe.defaultProps = {
  nothing: ({ children }) => null,
  something: ({ children }) => null
}

export default Maybe
