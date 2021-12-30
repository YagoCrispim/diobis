import * as TYPES from './types'

const INITIAL_STATE = {
  lastPage: 1,
  data: [],
  filteredData: [],
  otherJobs: [],
  loading: false,
  error: {
    active: false,
    message: '',
    code: '',
  },
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.DATA_PUSH:
      return { ...state, loading: true }

    case TYPES.DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: { ...INITIAL_STATE.error },
      }

    case TYPES.FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload,
      }

    case TYPES.DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          active: true,
          message: action.payload.message,
          code: action.payload.status,
        },
      }

    case TYPES.UPDATE_CURRENT_PAGE_VALUE:
      return {
        ...state,
        lastPage: action.payload,
      }

    case TYPES.APPEND_DATA:
      const newState = { ...state }
      newState.filteredData.push(...action.payload)

      return { ...newState }

    case TYPES.GET_OTHER_JOBS:
      return {
        ...state,
        otherJobs: action.payload,
      }

    default:
      return state
  }
}

export default reducer
