import React, { useState } from 'react';
import SearchResults from './SearchResults';
import ClipLoader from 'react-spinners/ClipLoader'
import omdbService from '../services/omdb';

const Search = () => {
  const placeholder = 'Search for a movie';
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);


  const movieRequest = async() => {
    try {
      setIsLoading(true);
      const result = await omdbService.omdbSearch(search);
      setMovies(result.data.Search);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          movieRequest();
        }}
      >
        <label htmlFor="search">
          Movie
          <input 
            id="search" 
            placeholder={placeholder}
            value={search}
            onChange={e => setSearch(e.target.value)} 
          />
        </label>
        <button>Search</button>
      </form>
      {isLoaded && <SearchResults movies={movies} />}
      {isLoading && <ClipLoader 
            size='150px'
            css={{display: 'block', margin: '0 auto'}}
          />}
    </div>
  );
}

export default Search;