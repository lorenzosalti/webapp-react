

function MovieCard({ data }) {

  return (


    <div className="card">
      <img src={data.image} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{data.director}</h6>
        <p className="card-text">{data.abstract}</p>
        <a href="#" className="btn btn-primary">Movie Detail</a>
      </div>
    </div>


  )

}


export default MovieCard