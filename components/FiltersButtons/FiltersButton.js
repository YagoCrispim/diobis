import PropTypes from 'prop-types'
import * as CSS from './FiltersButton.styled'
import Trash from  '@heroicons/react/solid'

// TODO deletar

const Button = ({ title, red, onClick }) => {
  return (
    <CSS.FilterButtons type="button" red={red} onClick={onClick}>
      <button>Aplicar filtros</button>
      <button>
        <Trash />
      </button>
    </CSS.FilterButtons>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  red: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
