import { combineReducers } from 'redux'
import movieList from './movie-list'
import navigation from './navigation'
import pagination from './pagination'

const { movieListReducer } = movieList
const { navigationReducer } = navigation 
const { paginationReducer } = pagination

export default combineReducers({
  movieList: movieListReducer,
  activeTab: navigationReducer,
  pagination: paginationReducer
})