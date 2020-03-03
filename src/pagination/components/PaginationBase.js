import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalPages } from '../selectors'
import { setCurrentPage } from '../actions'
import { getMovies } from '../../movie-list/actions'
// import movieList from '../../movie-list'
// movieList is undefined??!!

const PaginationBase = () => {
  const totalPages = useSelector(getTotalPages)
  const dispatch = useDispatch()

  const handlePageChange = (_, page) => {
    dispatch(setCurrentPage(page))
    dispatch(getMovies())
    scrollToTop()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="pagination-container">
      <Pagination 
        count={ totalPages } 
        onChange={ handlePageChange }
        color="primary" 
      />
    </div>
  )
}

export default PaginationBase