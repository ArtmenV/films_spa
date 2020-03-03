import React from 'react'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const MovieCardButtons = ({ movieLink }) => (
  <div className="movie-card__buttons-container">
    <Button
      variant="contained"
      size="small"
      startIcon={ <Add /> }
    >
      Add
    </Button>
    <Button
      href={ movieLink }
      variant="contained"
      size="small"
      color="primary"
    >
      More details
    </Button>
  </div>
)

export default MovieCardButtons