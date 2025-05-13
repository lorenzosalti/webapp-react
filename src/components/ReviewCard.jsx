

function ReviewCard({ data }) {

  const { name, vote, text } = data

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>{name}</h5>
        <h6>{vote}</h6>
        <p>{text}</p>
      </div>
    </div>
  )

}


export default ReviewCard