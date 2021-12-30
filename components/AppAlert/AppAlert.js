import PropTypes from 'prop-types'
import * as CSS from './AppAlert.styled'

const AppAlert = ({ children, type = "success" }) => {
  return (
    <CSS.Container type={type}>
      { children }
    </CSS.Container>
  )
}

AppAlert.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf([ 'success', 'alert', 'warning', 'message' ])
}

export default AppAlert
