import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"
import StarRating from "../components/StarRating"
import ReviewForm from "../components/ReviewForm"

import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"


function MovieDetailPage() {

  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const { setIsLoading } = useContext(GlobalContext)

  const movieUrl = `http://localhost:3000/movies/${id}`

  function getMovie() {
    setIsLoading(true)
    axios.get(movieUrl)
      .then(res => {
        setMovie(res.data)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }

  useEffect(getMovie, [id])


  const { title, director, abstract, average_vote, reviews } = movie

  return (
    <>
      <section className="container">
        <h2>{title}</h2>
        <h4>Director: {director}</h4>
        <p>{abstract}</p>
        <h6><StarRating vote={average_vote} /></h6>
      </section>

      <section className="container">
        <h3 className="mb-2">Reviews</h3>
        {reviews ? reviews.map(review => <ReviewCard data={review} key={review.id} />) : <div>No Review</div>}

        <ReviewForm movieId={id} refreshMovie={getMovie} />

      </section>
    </>
  )

}

export default MovieDetailPage