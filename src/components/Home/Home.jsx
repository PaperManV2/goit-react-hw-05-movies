import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/movieAPI';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await getTrendingMovies();
      setMovies(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.home}>
      <h2>Popularne filmy dzisiaj</h2>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
