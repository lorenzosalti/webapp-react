import { useState } from "react"
import axios from "axios"

function ReviewForm({ id }) {

  const blankReview = {
    name: '',
    vote: 0,
    text: ''
  }

  const url = `http://localhost:3000/movies/${id}/reviews`

  const [reviewData, setReviewData] = useState(blankReview)

  function handleReviewtData(event) {

    const eventValue = event.target.value

    setReviewData(prev => ({
      ...prev,
      [event.target.name]: eventValue
    }))
  }

  function handleReviewSubmit(event) {
    event.preventDefault()

    axios.post(url, reviewData)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))

    setReviewData(blankReview)
  }


  return (
    <div className="card">
      <div className="card-header">
        New Review
      </div>
      <form className="card-body" onSubmit={handleReviewSubmit}>

        <div className="mb-3">
          <label htmlFor="new-review-name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="new-review-name"
            name="name"
            value={reviewData.name}
            onChange={handleReviewtData}
            placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="new-review-vote" className="form-label">Vote</label>
          <select
            className="form-select"
            id="new-review-vote"
            name="vote"
            value={reviewData.vote}
            onChange={handleReviewtData}
            aria-label="Movie Vote">
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="new-review-text" className="form-label">Text</label>
          <textarea
            className="form-control"
            id="new-review-text"
            name="text"
            value={reviewData.text}
            onChange={handleReviewtData}
            placeholder="Insert Review" />
        </div>

        <button className="btn btn-primary">Add Review</button>

      </form>
    </div>
  )

}


export default ReviewForm
