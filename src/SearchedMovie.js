import "./MovieCard.css"

function SearchedMovie(props) {

  const API_IMG = "https://image.tmdb.org/t/p/w500/"
  return (
    <div className="card">
      <div className="poster">
        <img src={props.image || "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
      </div>

      <div className="info">
        <p className="title">{props.title} </p>
        {/* <p className="vote">{props.imDbRating} </p> */}
      </div>

      <div className="overview">
        <h2 className="title_overview">description:
          <h3 className="overview_info">{props.description}</h3>
        </h2>
      </div>
    </div>
  )
}

export default SearchedMovie