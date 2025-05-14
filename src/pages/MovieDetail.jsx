import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"
import StarRating from "../components/StarRating"


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
        {reviews ? reviews.map(review => <ReviewCard data={review} key={review.id} />) : <div>Loading</div>}



        <div className="card">
          <div className="card-header">
            New Review
          </div>
          <div className="card-body">

            <div className="mb-3">
              <label htmlFor="new-review-name" className="form-label">Name</label>
              <input type="text" className="form-control" id="new-review-name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="new-review-vote" className="form-label">Vote</label>
              <select className="form-select" id="new-review-vote" aria-label="Movie Vote">
                <option defaultValue="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="new-review-text" className="form-label">Text</label>
              <textarea className="form-control" id="new-review-text" placeholder="Insert Review" />
            </div>

            <a href="#" className="btn btn-primary">Go somewhere</a>

          </div>
        </div>

      </section>
    </>
  )

}

export default MovieDetailPage