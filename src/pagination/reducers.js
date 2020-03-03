import types from './actionTypes'

const initialState = {
  currentPage: 1,
  totalPages: null
}

const pagination = (state=initialState, action) => {
  switch(action.type) {
    case types.CURRENT_PAGE:
      return { 
        ...state, 
        currentPage: action.payload
      }
    case types.TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }
    default:
      return state
  }
}

export default pagination