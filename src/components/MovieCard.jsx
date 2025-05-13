

function MovieCard({ data }) {

  const { id, title, director, abstract, image, average_vote } = data

  return (


    <div className="card">
      <img src={image} className="card-img-top mb-2" alt={title} />
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{director}</h6>
        <p className="card-text mb-2">{abstract}</p>
        <h6 className="card-subtitle mb-2">{average_vote}</h6>
        <a href="#" className="btn btn-primary">Movie Detail</a>
      </div>
    </div>


  )

}


export default MovieCard