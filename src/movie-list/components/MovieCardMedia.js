import React from 'react'
import { CardMedia } from '@material-ui/core'
import { StarRate } from '@material-ui/icons'

const MovieCardMedia = ({ data }) => {
  const BASE_API_IMAGE = 'https://image.tmdb.org/t/p/w300'

  return (
    <CardMedia 
      className="movie-card__cover"
      image={ BASE_API_IMAGE + data.poster_path }
      title="poster"
    >
      <div className="movie-rate">
        <StarRate />
        <span className="movie-rate__value">{ data.vote_average }</span>
      </div>
    </CardMedia> 
  )
}

export default MovieCardMedia