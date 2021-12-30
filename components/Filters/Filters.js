import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as CSS from './Filters.styled'
import { FilterIcon, TrashIcon } from '@heroicons/react/outline'

const TheFilters = forwardRef(
  (
    { noAnimation, visible, cards, onApply, onReset, handleSelected, handleVisibility },
    ref
  ) => {
    const filterRef = useRef(null)

    useImperativeHandle(
      ref,
      () => {
        return filterRef
      },
      []
    )

    return (
      <CSS.Container ref={filterRef} noAnimation={noAnimation} visible={visible}>
        <CSS.FilterButton onClick={() => handleVisibility()}>
          <FilterIcon />
        </CSS.FilterButton>
        <CSS.Content>
          {cards.map(card => (
            <div key={card.index}>
              <CSS.Card>
                <CSS.Title>{card.title}</CSS.Title>
                {card.options.map(option => {
                  return (
                    <CSS.Options
                      key={option.text}
                      onClick={() =>
                        handleSelected(card.index, option.key, option.text)
                      }
                    >
                      <span>
                        <CSS.Circle active={option.active} />
                        <p>{option.text}</p>
                      </span>
                    </CSS.Options>
                  )
                })}
                {/* <CSS.More> */}
                  {/* <p>Mais</p> */}
                {/* </CSS.More> */}
              </CSS.Card>
              <CSS.Separator />
            </div>
          ))}
          <CSS.Void />
          <CSS.ActionButtons>
            <button onClick={() => onApply()}>Aplicar filtros</button>
            <button onClick={() => onReset()}>
              <TrashIcon />
            </button>
          </CSS.ActionButtons>
        </CSS.Content>
      </CSS.Container>
    )
  }
)

TheFilters.propTypes = {
  visible: PropTypes.bool,
  cards: PropTypes.array,
  onApply: PropTypes.func,
  onReset: PropTypes.func,
  handleSelected: PropTypes.func,
  handleVisibility: PropTypes.func,
}

export default TheFilters
