

function ReviewForm() {

  return (
    <div className="card">
      <div className="card-header">
        New Review
      </div>
      <form className="card-body">

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

        <a href="#" className="btn btn-primary">Add Review</a>

      </form>
    </div>
  )

}


export default ReviewForm
