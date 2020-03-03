import { createAction } from 'redux-actions'
import types from './actionTypes'
import * as api from '../api'
import pagination from '../pagination'

const { paginationActions } = pagination

export const moviesIsLoading = createAction(types.MOVIE_IS_LOADING)
export const setMovies = createAction(types.SET_MOVIES)


//---------------------------- Thunks
export const getMovies = () => ( dispatch, getState ) => {
  const { 
    pagination: {
      currentPage
    }, 
    activeTab 
  } = getState()

  let movieApi

  const config = {
    params: {
      page: currentPage
    }
  }
  
  dispatch(moviesIsLoading(true))

  switch (activeTab) {
    case 'popular':
      movieApi = api.getPopularMovies
      break
    case 'top-rated':
      movieApi = api.getTopRatedMovies
      break
  }

  movieApi(config)
    .then(res => {
      dispatch(paginationActions.setTotalPages(res.data.total_pages))
      dispatch(setMovies(res.data.results))
    })
    .finally(() => {
      dispatch(moviesIsLoading(false))
    })
}

