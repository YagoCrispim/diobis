import PropTypes from 'prop-types'
import * as CSS from './AppLabel.styled'

const AppLabel = ({ color, value }) => {
  return (
    <CSS.Container>
      <CSS.Value color={color}>{value}</CSS.Value>
    </CSS.Container>
  )
}

AppLabel.propTypes = {
  /** Receives a color hex to indicate a specific label */
  color: PropTypes.string,
  /** Receives a value to render inside the label */
  value: PropTypes.string.isRequired
}

export default AppLabel