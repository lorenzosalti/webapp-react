

function MovieCard({ data }) {

  const { id, title, director, abstract, image } = data

  return (


    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{director}</h6>
        <p className="card-text">{abstract}</p>
        <a href="#" className="btn btn-primary">Movie Detail</a>
      </div>
    </div>


  )

}


export default MovieCard