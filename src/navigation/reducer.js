import types from './actionTypes'

const initialState = 'popular'

const activeTab = ( state=initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_TAB:
      return action.payload
    default:
      return state
  }
}

export default activeTab