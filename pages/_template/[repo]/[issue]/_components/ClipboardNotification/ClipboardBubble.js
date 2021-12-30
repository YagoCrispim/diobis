import PropTypes from 'prop-types'
import * as CSS from './ClipboardBubble.styled'

const ClipboardNotification = ({ text, visible }) => {
  return <CSS.ClipboardBubble visible={visible}>{text}</CSS.ClipboardBubble>
}

ClipboardNotification.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
}

export default ClipboardNotification
