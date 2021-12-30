import { combineReducers } from 'redux'

import Jobs from './_Jobs/reducer'
import Filter from './_Filter/reducer'

const Reducers = combineReducers({
  Jobs,
  Filter,
})

export default Reducers
