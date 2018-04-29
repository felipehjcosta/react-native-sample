import { combineReducers } from 'redux'
import listingReducer from './listing/reducers/index'
import detailReducer from './detail/reducer'
import NavReducer from './NavReducer'

const AppReducer = combineReducers({
  navigation: NavReducer,
  listing: listingReducer,
  detail: detailReducer
})

export default AppReducer
