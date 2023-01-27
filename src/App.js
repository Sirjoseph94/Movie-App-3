
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608" 
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query="

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState("")

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => setMovies(data.results))
  }, [])

  console.log(movies)

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(API_SEARCH + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }
  return (
    <div className="App">
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch} >
            <input onChange= { e => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        {movies.map((movie) => (

          <MovieCard {...movie}/>
        ))}
      </div>

       
    </div>
  );
}

export default App;


