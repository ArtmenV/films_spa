import React, { useEffect, useState } from 'react'
import { getMovieDetails } from '../../api'
import MovieCardMedia from './MovieCardMedia'
import MovieCardTitle from './MovieCardTitle'
import MovieCardGenres from './MovieCardGenres'
import MovieCardOverview from './MovieCardOverview'
import MovieCardButtons from './MovieCardButtons'
import { useHistory } from 'react-router-dom'
import { Card } from '@material-ui/core'


const MovieCard = ({ movie }) => {
	const [movieDetails, setMovieDetails] = useState(null)
	const history = useHistory()

	useEffect(() => {
		getMovieDetails(movie.id)
			.then(res => {
				setMovieDetails(res.data)
			})
	}, [])

	function getTitle () {
		return `${movie.title} (${movie.release_date.slice(0, 4)})`
	}

	function getMediaData () {
		return {
			poster_path: movie.poster_path,
			vote_average: movie.vote_average
		}
	}

	function toMoviePage () {
		history.push(`/movie/${movie.id}`)
	}

	return (
		<Card className="movie-card-root">
			<MovieCardMedia data={ getMediaData() } />
			<div className="movie-card__detail">
				<MovieCardTitle title={ getTitle() } />
				<MovieCardGenres genres={ movieDetails ? movieDetails.genres : [] } />
				<MovieCardOverview overview={ movie.overview } />
				<MovieCardButtons movieLink={`/movie/${movie.id}`} />
			</div>
		</Card>
	)
}

export default MovieCard