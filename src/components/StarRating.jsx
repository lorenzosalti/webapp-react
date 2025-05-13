

function StarRating({ vote }) {

  const maxVote = 5

  return [...Array(maxVote)].map((_, index) => <i key={index} className={`fa-${index < vote ? `solid` : `regular`} fa-star`}></i>)

}

export default StarRating