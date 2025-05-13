import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"


function MovieDetailPage() {

  const { id } = useParams()
  const [movie, setMovie] = useState({})



  const movieUrl = `http://localhost:3000/movies/${id}`

  function getMovie() {
    axios.get(movieUrl)
      .then(res => {
        // console.log(res.data)
        setMovie(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(getMovie, [id])


  const { title, director, abstract, average_vote, reviews } = movie
  console.log(reviews)

  return (
    <>
      <section className="container">
        <h2>{title}</h2>
        <h4>Director: {director}</h4>
        <p>{abstract}</p>
        <h6>{average_vote}</h6>
      </section>

      <section className="container">
        <h3 className="mb-2">Reviews</h3>
        {reviews ? reviews.map(review => <ReviewCard data={review} key={review.id} />) : <div>Loading</div>}
      </section>
    </>
  )

}

export default MovieDetailPage