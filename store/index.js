import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from './ducks/rootReducers'
import Thunk from 'redux-thunk'

let store

function initStore(initialStore) {
  return createStore(
    Reducers,
    initialStore,
    composeWithDevTools(applyMiddleware(Thunk))
  )
}

export const initializeStore = preLoaded => {
  let _store = store ?? initStore(preLoaded)

  if (preLoaded && store) {
    _store = initStore({
      ...store.getState(),
      ...preLoaded,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
