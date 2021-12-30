import * as TYPES from './types'
import INITIAL_STATE from './initialState'

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FILTERED_DATA:
      const { index, optionKey, optionText } = action.payload

      // state clone
      let newState = { ...state }

      // color change
      // REFACTOR. Remover o que depende do texto
      const reverse = newState.cards[index].options[optionKey].active
      newState.cards[index].options[optionKey].active = !reverse

      // Não permite opçoes duplicadas
      // TODO remove
      if (newState.selected.includes(optionText)) {
        const index = newState.selected.indexOf(optionText)
        newState.selected.splice(index, 1)
      } else {
        newState.selected.push(optionText)
      }

      return {
        ...state,
        selected: newState.selected,
        cards: newState.cards,
      }

    // GAMB
    case TYPES.PERSIST_INITIAL:
      const strCards = JSON.stringify(action.payload.cardsState)
      localStorage.setItem('filter_state', strCards)
      return { ...state, cards: action.payload.cardsState }

    case TYPES.FILTER_RESET:
      const cardsInitial = JSON.parse(localStorage.getItem('filter_state'))
      return {
        ...state,
        selected: [],
        applyed: [],
        cards: cardsInitial,
      }
    // end gamb

    case TYPES.APPLY_OPTIONS:
      return {
        ...state,
        applyed: action.payload.optionsToApply,
      }

    case TYPES.RESET_OPTIONS:
      return {
        ...state,
        applyed: [],
      }

    default:
      return state
  }
}

export default reducer
