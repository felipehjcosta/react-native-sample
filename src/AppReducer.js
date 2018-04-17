import { combineReducers } from 'redux'
import listingReducer from './listing/reducers/index'
import NavReducer from './NavReducer'

const AppReducer = combineReducers({
  navigation: NavReducer,
  listing: listingReducer
})

export default AppReducer
