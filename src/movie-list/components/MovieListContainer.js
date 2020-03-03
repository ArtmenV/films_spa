import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../actions'
import { 
  getMovieItems, 
  getActiveTab,
  getDownloadProgress
} from '../selectors'
import MovieCard from './MovieCard'
import { Backdrop, CircularProgress } from '@material-ui/core/'


const MovieListContainer = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(getActiveTab)
  const isLoading = useSelector(getDownloadProgress)
  const movieItems = useSelector(getMovieItems)

  useEffect(() => {
    dispatch(getMovies())
  }, [activeTab])

  return (
    <section className="movie-list">
      {
        movieItems.map(movie => <MovieCard 
          key={ movie.id } 
          movie={ movie }
        />)
      }
      <Backdrop 
        open={ isLoading } 
        invisible={ true }
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </section>
  )
}

export default MovieListContainer