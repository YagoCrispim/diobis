import * as TYPES from './types'

export const FILTERED = (index, optionKey, optionText) => ({
  type: TYPES.FILTERED_DATA,
  payload: { index, optionKey, optionText },
})

// GAMB
export const PERSIST_INITIAL = cardsState => ({
  type: TYPES.PERSIST_INITIAL,
  payload: { cardsState },
})
// end gamb

export const RESET = _ => ({
  type: TYPES.FILTER_RESET,
})

export const RESET_OPTIONS = _ => ({
  type: TYPES.RESET_OPTIONS,
})

export const APPLY_OPTIONS = optionsToApply => ({
  type: TYPES.APPLY_OPTIONS,
  payload: { optionsToApply },
})
