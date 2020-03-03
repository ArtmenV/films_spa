import React from 'react'
import header from '../header'
import navigation from '../navigation'
import movieList from '../movie-list'
import pagination from '../pagination'

const { Header } = header
const { Navigation } = navigation
const { MovieListContainer } = movieList
const { PaginationBase } = pagination

const App = () => (
  <div className="app">
    <Header />
    <main className="app-main container">
      <Navigation />
      <MovieListContainer />
      <PaginationBase />
    </main>
  </div>
)

export default App
