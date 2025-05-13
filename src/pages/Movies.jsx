import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import axios from "axios"


function MoviesPage() {

  const [movies, setMovies] = useState([])

  const moviesUrl = 'http://localhost:3000/movies'

  function getMovies() {

    axios.get(moviesUrl)
      .then(res => {
        console.log(res.data);
        setMovies(res.data);

      })
      .catch(err => console.error(err))

  }


  useEffect(getMovies, [])


  return (
    <>
      <h1>Movies</h1>

      <section className="container text-center">
        <div className="row g-3">

          {movies.length ? movies.map(movie => (
            <div className="col col-md-4" key={movie.id}>
              <MovieCard data={movie} />
            </div>
          )) : <div>404 No element found</div>}





        </div>
      </section>
    </>
  )

}

export default MoviesPage


