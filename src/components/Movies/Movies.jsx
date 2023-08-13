import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../api/movieAPI';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const response = await searchMovies(query);
      console.log(response);
      setMovies(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className={styles['search-form']} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul className={styles['movies-list']}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div className={styles['movie-card']}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className={styles['movie-details']}>
                  <h3>{movie.title}</h3>
                  <p>Release Date: {movie.releaseDate}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
