import React from 'react'
import { Typography } from '@material-ui/core'

const MovieCardOverview = ({ overview }) => (
	<Typography 
		variant="body2" 
		color="textSecondary" 
		component="p"
		className="movie-card__detail-overview"
	>
		{ overview }
	</Typography>
)

export default MovieCardOverview