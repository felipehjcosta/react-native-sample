// @flow
// import { combineReducers } from 'redux'
// import { items, itemsIsLoading } from './items'
//
// export default combineReducers({
//   items,
//   itemsIsLoading,
// })

// export default function reducer (state = {}, action) {
//   switch (action.type) {
//     case 'ITEMS_IS_LOADING':
//       return Object.assign(
//         {},
//         state,
//         action.isLoading
//       )
//     case 'ITEMS_FETCH_DATA_SUCCESS':
//       return Object.assign(
//         {},
//         state,
//         action.items
//       )
//     default:
//       return state
//   }
// }

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items

    default:
      return state
  }
}
