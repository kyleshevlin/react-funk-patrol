import PropTypes from 'prop-types'

const Either = ({ children, left, of, right }) =>
  of ? right({ children }) : left({ children })

Either.propTypes = {
  children: PropTypes.any,
  left: PropTypes.func,
  of: PropTypes.any,
  right: PropTypes.func
}

Either.defaultProps = {
  left: ({ children }) => null,
  right: ({ children }) => null
}

export default Either
