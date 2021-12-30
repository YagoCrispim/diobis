import * as TYPES from './types'
import Service from '../../../services/Jobs.service'

export const PUSH = () => ({
  type: TYPES.DATA_PUSH,
})

export const ERROR = data => ({
  type: TYPES.DATA_ERROR,
  payload: data,
})

export const SUCCESS = data => ({
  type: TYPES.DATA_SUCCESS,
  payload: data,
})

export const FILTERED_DATA = data => {
  return {
    type: TYPES.FILTERED_DATA,
    payload: data,
  }
}

export const APPEND_DATA = jobs => {
  return {
    type: TYPES.APPEND_DATA,
    payload: jobs,
  }
}

export const GET_ANOTHER_JOBS = jobs => {
  return {
    type: TYPES.GET_OTHER_JOBS,
    payload: jobs,
  }
}

export const UPDATE_CURRENT_PAGE_VALUE = currentPage => {
  return {
    type: TYPES.UPDATE_CURRENT_PAGE_VALUE,
    payload: currentPage,
  }
}

export const GET_ANOTHER_PAGE = (page, repo) => {
  return async dispatch => {
    Service.getAll(page, repo)
      .then(jobs => dispatch(APPEND_DATA(jobs)))
      // .catch(error => dispatch(ERROR(error)))
      .catch(error => console.log(error))
  }
}

export const OTHER_JOBS = (userName, repo) => {
  return async dispatch => {
    Service.getByUser(userName, repo)
      .then(jobs => {
        dispatch(GET_ANOTHER_JOBS(jobs))
      })
      .catch(error => dispatch(ERROR(error)))
  }
}

// ASYNC FN
export const FETCHING = repo => {
  return async dispatch => {
    dispatch(PUSH())
    Service.getAll(undefined, repo).then(
      success => dispatch(SUCCESS(success)),
      error => dispatch(ERROR(error))
    )
  }
}
