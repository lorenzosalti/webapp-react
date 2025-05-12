import MovieCard from "../components/MovieCard"


function MoviesPage() {

  return (
    <>
      <h1>Movies</h1>

      <section className="container text-center">
        <div className="row g-3">

          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />

        </div>
      </section>
    </>
  )

}

export default MoviesPage