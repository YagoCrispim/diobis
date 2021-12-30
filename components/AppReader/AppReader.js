import PropTypes from 'prop-types'
import { GitHubReader } from './AppReader.styled'
import GitHubPlugin from 'remark-gfm'

const AppReader = ({ children }) => {
  return <GitHubReader plugins={[GitHubPlugin]}>{children}</GitHubReader>
}

AppReader.propTypes = {
  // receive MD string to transform in HTML
  children: PropTypes.string,
}

export default AppReader
