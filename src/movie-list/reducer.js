import types from './actionTypes'

const initialState = {
  items: [],
  isLoading: false
}

const movieList = (state = initialState, action) => {
  switch ( action.type ) {
    case types.MOVIE_IS_LOADING:
      return { 
        ...state, 
        isLoading: action.payload 
      }
    case types.SET_MOVIES:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

export default movieList