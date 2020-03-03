import axiosConfig from './axiosConfig'
import * as endpoints from './endpoints'


export const getPopularMovies = (config) => axiosConfig(endpoints.popular, config)
export const getTopRatedMovies = (config) => axiosConfig(endpoints.topRated, config)
export const getSimilarMovies = (movie_id, config) => axiosConfig(endpoints.similar(movie_id), config)
export const getMovieDetails = (movie_id, config) => axiosConfig(endpoints.movieDetails(movie_id), config)

