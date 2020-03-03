import React from 'react'
import { Chip } from '@material-ui/core'

const MovieCardGenres = ({ genres }) => (
	<section className="movie-card__detail-genres">
		{
			genres.map(genre => 
				<Chip 
					key={genre.id} 
					label={genre.name} 
					className="chip"
				/>
			)
		}
	</section> 
)

export default MovieCardGenres