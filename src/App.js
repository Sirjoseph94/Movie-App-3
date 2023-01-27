
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchedMovie from './SearchedMovie';

function App() {

  const API_URL = "https://imdb-api.com/API/MostPopularMovies/k_gz5fqjj1"
  const API_SEARCH = "https://imdb-api.com/API/Search/k_gz5fqjj1/"

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState("")
  const [isSearch, setIsSearch] = useState(false)
  const [searched, setSearched] = useState([])

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => setMovies(data.items))
  }, [])


  const handleSearch = (e) => {
    e.preventDefault()
    setIsSearch(true)
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setSearched(data.results))
  }

  console.log("terms", searched)
  return (
    <div className="App">
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch} >
            <input onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        {!isSearch ? movies.map((movie) => (
          <MovieCard {...movie} />
        ))
          :
          searched.map((movie) => (
            <SearchedMovie {...movie} />
          ))
        }

      </div>


    </div>
  );
}

export default App;


