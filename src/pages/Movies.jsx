import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import axios from "axios"

import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"


function MoviesPage() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const { setIsLoading } = useContext(GlobalContext)

  const moviesUrl = 'http://localhost:3000/movies'

  function getMovies() {

    setIsLoading(true)

    axios.get(moviesUrl, { params: { search } })
      .then(res => {
        setMovies(res.data);
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }

  function getSearch(e) {
    setSearch(e.target.value)
  }

  function searchMovies(e) {
    e.preventDefault()
    getMovies()
  }

  useEffect(getMovies, [])


  return (
    <div className="container">

      <h1 className="mb-4">Movies</h1>

      <section className="container text-center">

        <div className="container d-flex justify-content-between mb-4">
          <h2>Greatest Movies of all time</h2>
          <form className="d-flex" role="search" onSubmit={searchMovies}>
            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={getSearch} />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>

        <div className="row g-3">

          {movies.length ? movies.map(movie => (
            <div className="col col-md-4" key={movie.id}>
              <MovieCard data={movie} />
            </div>
          )) : <div>404 No element found</div>}

        </div>

      </section>
    </div>
  )

}

export default MoviesPage


